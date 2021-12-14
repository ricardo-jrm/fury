import React from 'react';
import Typography from '@mui/material/Typography';

/**
 * ExampleComponent
 */
export const ExampleComponent = ({ text }: ExampleComponentProps) => (
  <Typography data-testid="test-component">{text}</Typography>
);

/**
 * ExampleComponent props
 */
export interface ExampleComponentProps {
  /**
   * Prop
   */
  text: string;
}
