import { CheckboxLabel, Stack } from '@crhis/growth-system-design';

function App() {
  return (
    <Stack as="section" width="full" center p="4">
      <Stack width="full" direction="row" mb={10}>
        {Array.from({ length: 12 }).map((_, idx) => (
          <div key={idx} className="h-40 w-40 bg-red-700" />
        ))}
      </Stack>
      <CheckboxLabel label="hola mundo" errorMessage="hola" />
    </Stack>
  );
}

export default App;
