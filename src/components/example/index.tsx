import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useFury } from '../../hooks/useFury';

/**
 * ExampleComponent
 */
export const ExampleComponent = ({ text }: ExampleComponentProps) => {
  const { furyActive, furySetById, furyActiveId } = useFury();
  const { palette } = furyActive;

  return (
    <div>
      <Typography data-testid="test-component" variant="body1">
        {furyActiveId}: {text}
      </Typography>
      <Typography variant="body1">color: {palette.primary.main}</Typography>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => furySetById('fury1')}
        >
          Fury 1
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => furySetById('fury2')}
        >
          Fury 2
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => furySetById('fury3')}
        >
          Fury 3
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => furySetById('fury4')}
        >
          Fury 4
        </Button>
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
