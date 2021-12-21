import React, { useCallback, useMemo } from 'react';
import { ThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useLocalState } from '@ricardo-jrm/use-local-state';
import {
  FuryContext,
  FuryContextType,
  FuryMetaRecord,
} from '../../hooks/useFury';

/**
 * Themes record
 */
export type FuryThemes = {
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
   * Provided themes record
   */
  themes: FuryThemes;
  /**
   * Default theme ID
   */
  themesDefault: string;
  /**
   * Provided metas record
   */
  metas: FuryMetaRecord;
  /**
   * Default meta ID
   */
  metasDefault: string;
}

/**
 * FuryProvider
 */
export const FuryProvider = ({
  children,
  lsid,
  themes,
  themesDefault,
  metas,
  metasDefault,
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

  // init active meta
  const [metaActiveId, metaActiveIdSet] = useLocalState(
    lsid ? `${lsid}-meta-id` : 'fury-meta-id',
    metasDefault,
  );
  const metaActive = useMemo(() => metas[metaActiveId], [metas, metaActiveId]);

  // set meta by id
  const metaSetById = useCallback<FuryContextType['metaSetById']>(
    (metaId) => {
      if (metas[metaId]) {
        metaActiveIdSet(metaId);
      } else {
        // eslint-disable-next-line no-console
        console.log('meta not found for given id: ', metaId);
      }
    },
    [metas, metaActiveIdSet],
  );

  // build ctx
  const ctxFury = useMemo<FuryContextType>(
    () => ({
      themeActive,
      themeSetById,
      metaActive,
      metaSetById,
    }),
    [themeActive, themeSetById, metaActive, metaSetById],
  );

  return (
    <FuryContext.Provider value={ctxFury}>
      <ThemeProvider theme={themeActive}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </FuryContext.Provider>
  );
};
