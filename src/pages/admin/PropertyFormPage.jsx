import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Input, Textarea, Button } from '../../components/ui';
import {
  createProperty,
  updateProperty,
  getPropertyById,
  uploadPropertyMedia,
  addPropertyMedia,
  deletePropertyMedia,
} from '../../lib/propertiesService';

const INITIAL_FORM = {
  title: '',
  description_es: '',
  description_en: '',
  price: '',
  type: 'house',
  status: 'available',
  city: '',
  neighborhood: '',
  address: '',
  bedrooms: '',
  bathrooms: '',
  area: '',
  land_area: '',
  features: '',
  is_active: true,
};

const SELECT_CLASS = 'w-full px-4 py-3 rounded-lg bg-white text-dark border border-border hover:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200';

const PropertyFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [form, setForm] = useState(INITIAL_FORM);
  const [existingMedia, setExistingMedia] = useState([]);
  const [newFiles, setNewFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchingProperty, setFetchingProperty] = useState(isEdit);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isEdit) return;
    getPropertyById(id)
      .then(property => {
        setForm({
          title: property.title ?? '',
          description_es: property.description_es ?? '',
          description_en: property.description_en ?? '',
          price: property.price ?? '',
          type: property.type ?? 'house',
          status: property.status ?? 'available',
          city: property.city ?? '',
          neighborhood: property.neighborhood ?? '',
          address: property.address ?? '',
          bedrooms: property.bedrooms ?? '',
          bathrooms: property.bathrooms ?? '',
          area: property.area ?? '',
          land_area: property.land_area ?? '',
          features: (property.features ?? []).join(', '),
          is_active: property.is_active ?? true,
        });
        setExistingMedia(property.property_media ?? []);
      })
      .catch(() => navigate('/admin'))
      .finally(() => setFetchingProperty(false));
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleFiles = (e) => {
    const files = Array.from(e.target.files);
    setNewFiles(prev => [...prev, ...files]);
    setPreviews(prev => [...prev, ...files.map(f => URL.createObjectURL(f))]);
  };

  const removeNewFile = (index) => {
    URL.revokeObjectURL(previews[index]);
    setNewFiles(prev => prev.filter((_, i) => i !== index));
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const removeExistingMedia = async (media) => {
    try {
      await deletePropertyMedia(media.id);
      setExistingMedia(prev => prev.filter(m => m.id !== media.id));
    } catch {
      setError('Error deleting image. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const propertyData = {
        title: form.title,
        description_es: form.description_es || null,
        description_en: form.description_en || null,
        price: parseFloat(form.price),
        type: form.type,
        status: form.status,
        city: form.city || null,
        neighborhood: form.neighborhood || null,
        address: form.address || null,
        bedrooms: form.bedrooms ? parseInt(form.bedrooms) : null,
        bathrooms: form.bathrooms ? parseInt(form.bathrooms) : null,
        area: form.area ? parseFloat(form.area) : null,
        land_area: form.land_area ? parseFloat(form.land_area) : null,
        features: form.features
          ? form.features.split(',').map(f => f.trim()).filter(Boolean)
          : [],
        is_active: form.is_active,
      };

      const property = isEdit
        ? await updateProperty(id, propertyData)
        : await createProperty(propertyData);

      for (let i = 0; i < newFiles.length; i++) {
        const file = newFiles[i];
        const fileType = file.type.startsWith('video/') ? 'video' : 'image';
        const url = await uploadPropertyMedia(file, property.id);
        const isCover = existingMedia.length === 0 && i === 0;
        await addPropertyMedia(property.id, url, fileType, isCover, existingMedia.length + i);
      }

      navigate('/admin');
    } catch (err) {
      setError(err.message || 'Error saving property. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const featureTags = form.features.split(',').map(f => f.trim()).filter(Boolean);

  if (fetchingProperty) {
    return (
      <div className="min-h-screen bg-lightGray flex items-center justify-center">
        <p className="text-muted text-lg">Loading property...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-lightGray py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8">
          <Link to="/admin" className="text-accent hover:text-accent-dark text-sm flex items-center gap-1 mb-3 w-fit">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-primary">
            {isEdit ? 'Edit Property' : 'New Property'}
          </h1>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Basic Info */}
          <div className="bg-white rounded-xl shadow-warm p-6">
            <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-primary/10">Basic Information</h2>
            <div className="space-y-4">
              <Input
                label="Title *"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="e.g. Modern Apartment in Chapinero"
                required
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-primary font-medium mb-2">Type *</label>
                  <select name="type" value={form.type} onChange={handleChange} className={SELECT_CLASS}>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="farm">Farm</option>
                    <option value="lot">Lot</option>
                    <option value="commercial">Commercial</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-primary font-medium mb-2">Status *</label>
                  <select name="status" value={form.status} onChange={handleChange} className={SELECT_CLASS}>
                    <option value="available">Available</option>
                    <option value="reserved">Reserved</option>
                    <option value="sold">Sold</option>
                  </select>
                </div>
                <Input
                  label="Price (USD) *"
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="250000"
                  min="0"
                  required
                />
              </div>
              <label className="flex items-center gap-3 cursor-pointer w-fit">
                <input
                  type="checkbox"
                  name="is_active"
                  checked={form.is_active}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-border accent-accent"
                />
                <span className="text-primary font-medium">Active (visible to public)</span>
              </label>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-xl shadow-warm p-6">
            <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-primary/10">Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="City" name="city" value={form.city} onChange={handleChange} placeholder="Bogotá" />
              <Input label="Neighborhood" name="neighborhood" value={form.neighborhood} onChange={handleChange} placeholder="Chapinero" />
              <div className="md:col-span-2">
                <Input label="Address" name="address" value={form.address} onChange={handleChange} placeholder="Cra 7 # 45-23" />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="bg-white rounded-xl shadow-warm p-6">
            <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-primary/10">Property Details</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Input label="Bedrooms" name="bedrooms" type="number" value={form.bedrooms} onChange={handleChange} placeholder="3" min="0" />
              <Input label="Bathrooms" name="bathrooms" type="number" value={form.bathrooms} onChange={handleChange} placeholder="2" min="0" />
              <Input label="Built Area (m²)" name="area" type="number" value={form.area} onChange={handleChange} placeholder="120" min="0" />
              <Input label="Land Area (m²)" name="land_area" type="number" value={form.land_area} onChange={handleChange} placeholder="300" min="0" />
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl shadow-warm p-6">
            <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-primary/10">Description</h2>
            <div className="space-y-4">
              <Textarea
                label="Description (Spanish)"
                name="description_es"
                value={form.description_es}
                onChange={handleChange}
                placeholder="Descripción de la propiedad en español..."
                rows={4}
              />
              <Textarea
                label="Description (English)"
                name="description_en"
                value={form.description_en}
                onChange={handleChange}
                placeholder="Property description in English..."
                rows={4}
              />
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-xl shadow-warm p-6">
            <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-primary/10">Features & Amenities</h2>
            <Input
              label="Features"
              name="features"
              value={form.features}
              onChange={handleChange}
              placeholder="Pool, Garage, Garden, 24h Security"
              helperText="Separate each feature with a comma"
            />
            {featureTags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {featureTags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Media */}
          <div className="bg-white rounded-xl shadow-warm p-6">
            <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-primary/10">Photos & Videos</h2>

            {existingMedia.length > 0 && (
              <div className="mb-4">
                <p className="text-sm text-muted mb-2">Current media</p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  {existingMedia.map(media => (
                    <div key={media.id} className="relative group">
                      {media.type === 'image' ? (
                        <img src={media.url} alt="" className="w-full h-24 object-cover rounded-lg" />
                      ) : (
                        <div className="w-full h-24 bg-primary/10 rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      )}
                      {media.is_cover && (
                        <span className="absolute top-1 left-1 bg-accent text-white text-xs px-1.5 py-0.5 rounded">Cover</span>
                      )}
                      <button
                        type="button"
                        onClick={() => removeExistingMedia(media)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs leading-none"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-accent/30 rounded-xl cursor-pointer hover:border-accent/60 hover:bg-accent/5 transition-colors">
              <svg className="w-8 h-8 text-accent/40 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
              </svg>
              <span className="text-sm text-muted">Click to add photos or videos</span>
              <span className="text-xs text-muted mt-1">JPG, PNG, WEBP, MP4 — max 50MB each</span>
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp,video/mp4"
                multiple
                className="hidden"
                onChange={handleFiles}
              />
            </label>

            {previews.length > 0 && (
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-3">
                {previews.map((url, i) => (
                  <div key={i} className="relative group">
                    {newFiles[i]?.type.startsWith('video/') ? (
                      <div className="w-full h-24 bg-primary/10 rounded-lg flex flex-col items-center justify-center px-1">
                        <svg className="w-8 h-8 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs text-muted truncate w-full text-center">{newFiles[i].name}</span>
                      </div>
                    ) : (
                      <img src={url} alt="" className="w-full h-24 object-cover rounded-lg" />
                    )}
                    {existingMedia.length === 0 && i === 0 && (
                      <span className="absolute top-1 left-1 bg-accent text-white text-xs px-1.5 py-0.5 rounded">Cover</span>
                    )}
                    <button
                      type="button"
                      onClick={() => removeNewFile(i)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs leading-none"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="flex gap-4 pb-8">
            <Button type="submit" size="lg" disabled={loading}>
              {loading ? 'Saving...' : isEdit ? 'Save Changes' : 'Create Property'}
            </Button>
            <Button type="button" variant="outline" size="lg" onClick={() => navigate('/admin')}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyFormPage;
