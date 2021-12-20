import React, { useCallback, useEffect, useMemo } from 'react';
import { ThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useLocalState } from '@ricardo-jrm/use-local-state';
import { FuryContext, FuryContextType } from '../../hooks/useFury';

/**
 * Themes record
 */
export type FuryThemes = Record<string, ThemeOptions>;

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
   * Provided themes record
   */
  themes: FuryThemes;
  /**
   * Default theme ID
   */
  themesDefault: string;
}

/**
 * FuryProvider
 */
export const FuryProvider = ({
  children,
  lsid,
  themes,
  themesDefault,
}: FuryProviderProps) => {
  // init active theme
  const [themeActiveId, themeActiveIdSet] = useLocalState(
    lsid ? `${lsid}-theme-id` : 'fury-theme-id',
    themesDefault,
  );
  const themeActive = useMemo(
    () => createTheme(themes[themeActiveId]),
    [themes, themeActiveId],
  );

  // set theme by id
  const themeSetById = useCallback<FuryContextType['themeSetById']>(
    (themeId) => {
      if (themes[themeId]) {
        themeActiveIdSet(themeId);
      } else {
        // eslint-disable-next-line no-console
        console.log('theme not found for given id: ', themeId);
      }
    },
    [themes, themeActiveIdSet],
  );

  // build ctx
  const ctxFury = useMemo<FuryContextType>(
    () => ({
      themeActive,
      themeSetById,
    }),
    [themeActive, themeSetById],
  );

  // logging
  useEffect(() => {
    console.log({ themeActiveId, themeActive });
  }, [themeActiveId, themeActive]);

  return (
    <FuryContext.Provider value={ctxFury}>
      <ThemeProvider theme={themeActive}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </FuryContext.Provider>
  );
};
