import { useContext, createContext } from 'react';
import { Theme, createTheme } from '@mui/material';

/**
 * Context interface
 */
export interface FuryContextType {
  /**
   * Active fury
   */
  furyActive: Theme;
  /**
   * Active fury id
   */
  furyActiveId: string;
  /**
   * Set fury by ID
   */
  furySetById: (furyId: string) => void;
}

/**
 * Initial value
 */
const init: FuryContextType = {
  furyActive: createTheme({}),
  furyActiveId: 'default',
  furySetById: () => undefined,
};

/**
 * FuryContext
 */
export const FuryContext = createContext<FuryContextType>(init);

/**
 * useFury
 */
export const useFury = () => useContext(FuryContext);
