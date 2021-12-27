import React, { useCallback, useMemo } from 'react';
import {
  ThemeProvider,
  createTheme,
  ThemeOptions,
  Theme,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useLocalState } from '@ricardo-jrm/use-local-state';
import { FuryContext, FuryContextType } from '../../hooks/useFury';

/**
 * Themes record
 */
export type FuryRecord = {
  [x: string]: ThemeOptions;
};

/**
 * FuryProvider interface
 */
export interface FuryProviderProps {
  /**
   * children
   */
  children: JSX.Element;
  /**
   * custom local storage ID prefix
   */
  lsid?: string;
  /**
   * Provided fury record
   */
  fury: FuryRecord;
  /**
   * Default theme ID
   */
  furyDefault: string;
}

/**
 * FuryProvider
 */
export const FuryProvider = ({
  children,
  lsid,
  fury,
  furyDefault,
}: FuryProviderProps) => {
  // init active fury
  const [furyActiveId, furyActiveIdSet] = useLocalState(
    lsid || 'fury',
    furyDefault,
  );
  const furyActive: Theme = useMemo<Theme>(
    () => createTheme(fury[furyActiveId]),
    [fury, furyActiveId],
  );

  // set fury by id
  const furySetById = useCallback<FuryContextType['furySetById']>(
    (furyId) => {
      if (fury[furyId]) {
        furyActiveIdSet(furyId);
      } else {
        // eslint-disable-next-line no-console
        console.warn('fury not found for given id: ', furyId);
      }
    },
    [fury, furyActiveIdSet],
  );

  // build ctx
  const ctxFury = useMemo<FuryContextType>(
    () => ({
      furyActive,
      furyActiveId,
      furySetById,
    }),
    [furyActive, furyActiveId, furySetById],
  );

  return (
    <FuryContext.Provider value={ctxFury}>
      <ThemeProvider theme={furyActive}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </FuryContext.Provider>
  );
};
