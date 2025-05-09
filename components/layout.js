export default function Layout({ children }) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-gray-800">
        <main className="max-w-6xl mx-auto p-6">{children}</main>
      </div>
    );
  }