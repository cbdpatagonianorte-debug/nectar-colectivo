-- Create atelier_projects table
CREATE TABLE IF NOT EXISTS atelier_projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  status TEXT NOT NULL,
  roi_percent NUMERIC(5, 2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  stitch_color TEXT DEFAULT '#D4AF37'
);

-- Insert some luxury mock data
INSERT INTO atelier_projects (title, category, status, roi_percent, stitch_color)
VALUES 
  ('Aura Mansion', 'Residencial', 'En Progreso', 18.5, '#D4AF37'),
  ('Obsidian Tower', 'Comercial', 'Finalizado', 24.2, '#050A10'),
  ('Emerald Gardens', 'Paisajismo', 'Planificación', 12.8, '#10b981');
