---
title:  Clustered Bar Chart
permalink: /documentation/Visualization/Clustered-Bar-Chart/
---

# Clustered Bar Chart

## Overview

A **Clustered Bar Chart** is used to compare multiple categories side by side. Each category is divided into sub-groups, represented by separate bars, making it easy to analyze patterns and differences across multiple dimensions.

### When to Use

- To **compare different groups** within a category (e.g., sales performance by gender for each product category).
- To **visualize multiple measures** within the same category (e.g., sales vs. cost per product category).
- To **identify trends and differences** between sub-groups.

## Data Structure

A **Clustered Bar Chart** requires:

- **Y-Axis**: A categorical field representing the primary category (e.g., `product_category`).
- **Legend (Optional)**: A categorical field that defines the sub-grouping within each category (e.g., `gender`).
- **Measures**: One or more numerical fields that represent the values for comparison (e.g., `store_sales`, `store_cost`).
- **Filters (Optional)**: Used to refine the data displayed (e.g., filtering by time, region, or product type).

### Example Data Structure

| product_category | gender | store_sales | store_cost |
| ---------------- | ------ | ----------- | ---------- |
| Vegetables       | F      | 104060.10   | 82467.98   |
| Vegetables       | M      | 102010.34   | 0          |
| Snack Foods      | F      | 99367.33    | 79223.05   |
| Snack Foods      | M      | 98473.52    | 0          |
| Dairy            | F      | 55434.58    | 43552.48   |
| Dairy            | M      | 53199.71    | 0          |

## How to Configure

### Comparing a Single Measure

1. **Select the Analysis Model**: Choose the dataset containing the necessary fields.
2. **Set Y-Axis**: Choose the categorical field (e.g., `product_category`).
3. **Set Legend**: Select a sub-group field for comparison (e.g., `gender`).
4. **Set Measure**: Choose a numerical field to represent values (e.g., `store_sales`).
5. **Optional Customization**:
   - **Color**: Assign different colors to sub-groups for better distinction.
   - **Tooltips**: Show additional details when hovering over bars.
   - **Filters**: Apply filters (e.g., `Date`, `Region`).
   
   <div align="left"><img src="./../images/image-20250312214849741.png"  width="100%" /></div>

### Comparing Multiple Measures

A **Clustered Bar Chart** can also compare multiple numerical fields (e.g., `store_sales` vs. `store_cost`).

1. **Select the Analysis Model**: Choose the dataset containing the necessary fields.
2. **Set Y-Axis**: Choose the categorical field (e.g., `product_category`).
3. **Set Measures**: Select multiple numerical fields (e.g., `store_sales`, `store_cost`).
4. **Optional Customization**:
   - **Color**: Use distinct colors for each measure.
   - **Tooltips**: Display additional information on hover.
   - **Filters**: Restrict the data based on conditions (e.g., date range, location).
   
   <div align="left"><img src="./../images/image-20250312214911336.png"  width="100%" /></div>
