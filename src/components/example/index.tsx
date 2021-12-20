import React from 'react';
import Typography from '@mui/material/Typography';
import { useFury } from '../../index';

/**
 * ExampleComponent
 */
export const ExampleComponent = ({ text }: ExampleComponentProps) => {
  const { themeSetById } = useFury();

  return (
    <div>
      <Typography data-testid="test-component" variant="body1">
        {text}
      </Typography>
      <div>
        <button type="button" onClick={() => themeSetById('theme1')}>
          Theme 1
        </button>
        <button type="button" onClick={() => themeSetById('theme2')}>
          Theme 2
        </button>
        <button type="button" onClick={() => themeSetById('theme3')}>
          Theme 3
        </button>
        <button type="button" onClick={() => themeSetById('theme4')}>
          Theme 4
        </button>
      </div>
    </div>
  );
};

/**
 * ExampleComponent props
 */
export interface ExampleComponentProps {
  /**
   * Prop
   */
  text: string;
}
