import { supabase } from './supabase';

/**
 * @file: storage-helper.ts
 * @description: Funciones para gestionar el almacenamiento de activos visuales en Supabase Storage.
 */

export const uploadAsset = async (file: File, bucket = 'assets') => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `gallery/${fileName}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file);

  if (error) {
    throw error;
  }

  return data;
};

export const getAssetUrl = (path: string, bucket = 'assets') => {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
};

export const listAssets = async (bucket = 'assets', folder = 'gallery') => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .list(folder, {
      limit: 100,
      offset: 0,
      sortBy: { column: 'name', order: 'desc' },
    });

  if (error) {
    throw error;
  }

  return data;
};
