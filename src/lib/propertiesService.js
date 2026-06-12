import { supabase } from './supabase';

export const getProperties = async (filters = {}) => {
  let query = supabase
    .from('properties')
    .select(`*, property_media(*)`)
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (filters.type) query = query.eq('type', filters.type);
  if (filters.city) query = query.eq('city', filters.city);
  if (filters.minPrice) query = query.gte('price', filters.minPrice);
  if (filters.maxPrice) query = query.lte('price', filters.maxPrice);
  if (filters.bedrooms) query = query.gte('bedrooms', filters.bedrooms);

  const { data, error } = await query;
  if (error) throw error;
  return data;
};

export const getPropertyById = async (id) => {
  const { data, error } = await supabase
    .from('properties')
    .select(`*, property_media(*)`)
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
};

export const getFeaturedProperties = async (limit = 3) => {
  const { data, error } = await supabase
    .from('properties')
    .select(`*, property_media(*)`)
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data;
};

// Admin functions

export const getAllPropertiesAdmin = async () => {
  const { data, error } = await supabase
    .from('properties')
    .select(`*, property_media(*)`)
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
};

export const createProperty = async (propertyData) => {
  const { data, error } = await supabase
    .from('properties')
    .insert([propertyData])
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const updateProperty = async (id, propertyData) => {
  const { data, error } = await supabase
    .from('properties')
    .update({ ...propertyData, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const deleteProperty = async (id) => {
  const { error } = await supabase.from('properties').delete().eq('id', id);
  if (error) throw error;
};

export const uploadPropertyMedia = async (file, propertyId) => {
  const ext = file.name.split('.').pop();
  const filename = `${propertyId}/${Date.now()}.${ext}`;
  const { error } = await supabase.storage
    .from('property-media')
    .upload(filename, file);
  if (error) throw error;
  const { data: { publicUrl } } = supabase.storage
    .from('property-media')
    .getPublicUrl(filename);
  return publicUrl;
};

export const addPropertyMedia = async (propertyId, url, type, isCover = false, displayOrder = 0) => {
  const { data, error } = await supabase
    .from('property_media')
    .insert([{ property_id: propertyId, url, type, is_cover: isCover, display_order: displayOrder }])
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const deletePropertyMedia = async (mediaId) => {
  const { error } = await supabase.from('property_media').delete().eq('id', mediaId);
  if (error) throw error;
};
