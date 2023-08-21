## Getting started

This library is built in top of tailwindcss and flowbite-react

### Setup Tailwind CSS

Install Tailwind CSS:

```bash
npm i @crhis/growth-system-design
yarn add @crhis/growth-system-design
```

### Try it out

How you use Growth system design depends on your project setup. In general, you can just import the components you want to use from `@crhis/growth-system-design` and use them in a React `.jsx` file:

```jsx
import { Stack } from '@crhis/growth-system-design';

export default function MyPage() {
  const args = {
    as: 'div',
    width: 100,
    justifyContent: 'space-between',
    direction: 'column',
    height: 40,
  };
  return (
    <Stack {...args}>
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index}>
          <Button label={`Button ${idx + 1}`} />
        </div>
      ))}
    </Stack>
  );
}
```
