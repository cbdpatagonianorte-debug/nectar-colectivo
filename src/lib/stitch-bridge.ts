/**
 * @agent-note: Google Stitch Bridge - Nectar Colectivo (Artisanal Archive).
 * Sincronizado dinámicamente con el Proyecto Stitch: 11386713897338585727.
 */

export interface DesignTokens {
  colors: {
    primary: string;
    secondary: string;
    surface: string;
    surfaceContainer: string;
    surfaceContainerLow: string;
    surfaceContainerLowest: string;
    onSurface: string;
    onSurfaceVariant: string;
    accentGold: string;
  };
  typography: {
    display: string;
    body: string;
  };
  blur: string;
  roundness: string;
}

export const nectarTokens: DesignTokens = {
  colors: {
    primary: '#735c00', // Miel
    secondary: '#376847', // Bosque
    surface: '#fcf9f4', // Crema
    surfaceContainer: '#f0ede9',
    surfaceContainerLow: '#f6f3ee',
    surfaceContainerLowest: '#ffffff',
    onSurface: '#1c1c19',
    onSurfaceVariant: '#4d4635',
    accentGold: '#d4af37',
  },
  typography: {
    display: '"Noto Serif", serif',
    body: '"Plus Jakarta Sans", sans-serif',
  },
  blur: '12px',
  roundness: '1.5rem', // 24px
};

export const useStitchTokens = () => {
  return nectarTokens;
};
