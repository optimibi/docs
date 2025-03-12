---
title:  Stacked Area Chart
permalink: /documentation/Visualization/Stacked0-Area-Chart/
---

# Stacked Area Chart

## Overview

A **Stacked Area Chart** is used to visualize trends over time, where multiple categories are stacked on top of one another. This helps in understanding both the total value and the contribution of individual components. It is particularly useful when comparing trends among multiple groups while also showing their cumulative effect.

### When to Use

- To **analyze trends** in data over time while maintaining visibility into category contributions.
- To **compare multiple categories** that collectively contribute to a total.
- To **identify seasonal patterns** or fluctuations in grouped data.

## Data Structure

A **Stacked Area Chart** requires:

- **X-Axis**: A time-based dimension (e.g., Date, Month, Year) to track trends over time.
- **Legend**: A categorical field to represent different groups contributing to the total (e.g., Product Family, Department).
- **Measures**: A numerical value representing the metric to be analyzed (e.g., Sales, Revenue, Quantity Sold).
- **Filters (Optional)**: Used to restrict the data displayed, such as filtering by month, region, or category.

### Example Data Structure

| the_date   | product_family | store_sales |
| ---------- | -------------- | ----------- |
| 1997-12-01 | Drink          | 200         |
| 1997-12-01 | Food           | 500         |
| 1997-12-01 | Non-Consumable | 300         |
| 1997-12-02 | Drink          | 250         |
| 1997-12-02 | Food           | 700         |
| 1997-12-02 | Non-Consumable | 400         |

## How to Configure

1. **Select the Analysis Model**: Choose the dataset containing the necessary fields.
2. **Set X-Axis**: Select a time-based field (e.g., `the_date`).
3. **Set Legend**: Choose a categorical field to distinguish different data groups (e.g., `product_family`).
4. **Set Measures**: Choose a numerical field to measure (e.g., `store_sales`).
5. **Optional Customization**:
   - **Color**: Assign custom colors to different categories.
   - **Tooltips**: Display additional details when hovering over the chart.
   - **Time Axis**: Adjust time formatting.
   - **Filters**: Restrict data using filters.

## Example

The following example visualizes daily store sales across three product families (Drink, Food, Non-Consumable) for December 1997.

<div align="left"><img src="./images/image-20250312201251797.png"  width="100%" /></div>