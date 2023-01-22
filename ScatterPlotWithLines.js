import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const ScatterPlotWithLines = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Scale the data
    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.x)])
      .range([50, 450]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.y)])
      .range([150, 50]);

    // Create the line generator
    const line = d3
      .line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y));

    // Draw the lines
    svg
      .selectAll('.line')
      .data(data)
      .join('path')
      .attr('class', 'line')
      .attr('d', d => line(d.values))
      .attr('fill', 'none')
      .attr('stroke', 'blue');

    // Draw the dots
    svg
      .selectAll('.dot')
      .data(data)
      .join('circle')
      .attr('class', 'dot')
      .attr('cx', d => xScale(d.x))
      .attr('cy', d => yScale(d.y))
      .attr('r', 5)
      .attr('fill', 'red');

    // Draw the x-axis
    svg
      .append('g')
      .call(d3.axisBottom(xScale))
      .attr('transform', 'translate(0, 200)');

    // Draw the y-axis
    svg
      .append('g')
      .call(d3.axisLeft(yScale))
      .attr('transform', 'translate(50, 0)');
  }, [data]);

  return (
    <svg width={500} height={200} ref={svgRef}>
    </svg>
  );
}

export default ScatterPlotWithLines;