import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t mt-16">
      <Container className="py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} My Startup
      </Container>
    </footer>
  );
}
