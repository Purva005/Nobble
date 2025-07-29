export default function Footer() {
  return (
    <footer className="bg-purple-100 dark:bg-purple-900 text-center py-6 text-purple-600 dark:text-purple-300">
      <p>&copy; {new Date().getFullYear()} NOBBLE. All rights reserved.</p>
    </footer>
  );
}