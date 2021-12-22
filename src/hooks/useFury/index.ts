import { useContext, createContext } from 'react';
import { ThemeOptions } from '@mui/material/styles';

/**
 * Context interface
 */
export interface FuryContextType {
  /**
   * Active fury
   */
  furyActive: ThemeOptions;
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
  furyActive: {},
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
