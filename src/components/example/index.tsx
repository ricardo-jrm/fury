import React, { useMemo } from 'react';
import { useFury } from '../../index';
import { Typography } from '../../mui';
import { ResponsivePie } from '../../nivo';

/**
 * ExampleComponent
 */
export const ExampleComponent = ({ text }: ExampleComponentProps) => {
  const { furySetById, furyActiveId } = useFury();

  const pieData = useMemo(
    () => [
      {
        id: 'make',
        label: 'make',
        value: 361,
      },
      {
        id: 'c',
        label: 'c',
        value: 471,
      },
      {
        id: 'php',
        label: 'php',
        value: 13,
      },
      {
        id: 'python',
        label: 'python',
        value: 237,
      },
      {
        id: 'elixir',
        label: 'elixir',
        value: 217,
      },
    ],
    [],
  );

  return (
    <div>
      <Typography data-testid="test-component" variant="body1">
        {furyActiveId}: {text}
      </Typography>
      <div>
        <button type="button" onClick={() => furySetById('fury1')}>
          Fury 1
        </button>
        <button type="button" onClick={() => furySetById('fury2')}>
          Fury 2
        </button>
        <button type="button" onClick={() => furySetById('fury3')}>
          Fury 3
        </button>
        <button type="button" onClick={() => furySetById('fury4')}>
          Fury 4
        </button>
      </div>
      <div style={{ height: 360 }}>
        <ResponsivePie
          data={pieData}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: '#999',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000',
                  },
                },
              ],
            },
          ]}
        />
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
