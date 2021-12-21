import { useContext, createContext } from 'react';
import { ThemeOptions } from '@mui/material/styles';

export type FuryMetaRecord = {
  [x: string]: FuryMeta;
};

export type FuryMeta = {
  name: string;
  legalName?: string;
  trademark?: string;
  domain?: string;
  logo?: string;
  assets?: {
    [x: string]: string;
  };
};

/**
 * Context interface
 */
export interface FuryContextType {
  /**
   * Active theme ID
   */
  themeActive: ThemeOptions;
  /**
   * Set theme by ID
   */
  themeSetById: (themeId: string) => void;
  /**
   * Active brand ID
   */
  metaActive: FuryMeta;
  /**
   * Set meta by ID
   */
  metaSetById: (metaId: string) => void;
}

/**
 * Initial value
 */
const init: FuryContextType = {
  themeActive: {},
  themeSetById: () => undefined,
  metaActive: {
    name: 'Default',
  },
  metaSetById: () => undefined,
};

/**
 * FuryContext
 */
export const FuryContext = createContext<FuryContextType>(init);

/**
 * useFury
 */
export const useFury = () => useContext(FuryContext);
