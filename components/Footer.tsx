export default function Footer() {
  return (
    <footer className="center mt-5 flex justify-center space-x-4 p-4 text-xs">
      <p>Copyrights ©️ {new Date().getFullYear()} </p>
      <span>|</span>
      <p
        className="font-medium text-red-700"
      >
        El Safty
      </p>
    </footer>
  )
}
