<template>
  <div class="m-4">
    <p>Select any level of options (Single selection)</p>
    <el-cascader :options="options" :props="props1" clearable />
  </div>
</template>

<script lang="ts" setup>
const props1 = {
  checkStrictly: true,
  expandTrigger: 'hover' as const,
  label: "label3"
}

const props2 = {
  multiple: true,
  checkStrictly: true,
}

const options = [
  {
    value: 'guide',
    label3: 'Guide',
    children: [
      {
        value: 'disciplines',
        label3: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label3: 'Consistency',
          },
          {
            value: 'feedback',
            label3: 'Feedback',
          },
          {
            value: 'efficiency',
            label3: 'Efficiency',
          },
          {
            value: 'controllability',
            label3: 'Controllability',
          },
        ],
      },
      {
        value: 'navigation',
        label3: 'Navigation',
        children: [
          {
            value: 'side nav',
            label3: 'Side Navigation',
          },
          {
            value: 'top nav',
            label3: 'Top Navigation',
          },
        ],
      },
    ],
  },
  {
    value: 'component',
    label3: 'Component',
    children: [
      {
        value: 'basic',
        label3: 'Basic',
        children: [
          {
            value: 'layout',
            label3: 'Layout',
          },
          {
            value: 'color',
            label3: 'Color',
          },
          {
            value: 'typography',
            label3: 'Typography',
          },
          {
            value: 'icon',
            label3: 'Icon',
          },
          {
            value: 'button',
            label3: 'Button',
          },
        ],
      },
      {
        value: 'form',
        label3: 'Form',
        children: [
          {
            value: 'radio',
            label3: 'Radio',
          },
          {
            value: 'checkbox',
            label3: 'Checkbox',
          },
          {
            value: 'input',
            label3: 'Input',
          },
          {
            value: 'input-number',
            label3: 'InputNumber',
          },
          {
            value: 'select',
            label3: 'Select',
          },
          {
            value: 'cascader',
            label3: 'Cascader',
          },
          {
            value: 'switch',
            label3: 'Switch',
          },
          {
            value: 'slider',
            label3: 'Slider',
          },
          {
            value: 'time-picker',
            label3: 'TimePicker',
          },
          {
            value: 'date-picker',
            label3: 'DatePicker',
          },
          {
            value: 'datetime-picker',
            label3: 'DateTimePicker',
          },
          {
            value: 'upload',
            label3: 'Upload',
          },
          {
            value: 'rate',
            label3: 'Rate',
          },
          {
            value: 'form',
            label3: 'Form',
          },
        ],
      },
      {
        value: 'data',
        label3: 'Data',
        children: [
          {
            value: 'table',
            label3: 'Table',
          },
          {
            value: 'tag',
            label3: 'Tag',
          },
          {
            value: 'progress',
            label3: 'Progress',
          },
          {
            value: 'tree',
            label3: 'Tree',
          },
          {
            value: 'pagination',
            label3: 'Pagination',
          },
          {
            value: 'badge',
            label3: 'Badge',
          },
        ],
      },
      {
        value: 'notice',
        label3: 'Notice',
        children: [
          {
            value: 'alert',
            label3: 'Alert',
          },
          {
            value: 'loading',
            label3: 'Loading',
          },
          {
            value: 'message',
            label3: 'Message',
          },
          {
            value: 'message-box',
            label3: 'MessageBox',
          },
          {
            value: 'notification',
            label3: 'Notification',
          },
        ],
      },
      {
        value: 'navigation',
        label3: 'Navigation',
        children: [
          {
            value: 'menu',
            label3: 'Menu',
          },
          {
            value: 'tabs',
            label3: 'Tabs',
          },
          {
            value: 'breadcrumb',
            label3: 'Breadcrumb',
          },
          {
            value: 'dropdown',
            label3: 'Dropdown',
          },
          {
            value: 'steps',
            label3: 'Steps',
          },
        ],
      },
      {
        value: 'others',
        label3: 'Others',
        children: [
          {
            value: 'dialog',
            label3: 'Dialog',
          },
          {
            value: 'tooltip',
            label3: 'Tooltip',
          },
          {
            value: 'popover',
            label3: 'Popover',
          },
          {
            value: 'card',
            label3: 'Card',
          },
          {
            value: 'carousel',
            label3: 'Carousel',
          },
          {
            value: 'collapse',
            label3: 'Collapse',
          },
        ],
      },
    ],
  },
  {
    value: 'resource',
    label3: 'Resource',
    children: [
      {
        value: 'axure',
        label3: 'Axure Components',
      },
      {
        value: 'sketch',
        label3: 'Sketch Templates',
      },
      {
        value: 'docs',
        label3: 'Design Documentation',
      },
    ],
  },
]
</script>
