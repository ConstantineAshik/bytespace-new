import Logo from "@/components/layout/logo";
import AssetImage from "@/components/ui/asset-image";
import AuthForm from "./auth-form";
import AuthArtwork from "./auth-artwork";
export default function AuthPage({ signup = false }: { signup?: boolean }) {
  return (
    <main className={`auth-viewport ${signup ? "signup-viewport" : ""}`}>
      <div className="auth-canvas">
        {!signup && (
          <AssetImage
            src="/assets/hero-grid.svg"
            alt=""
            width={1442}
            height={1026}
            className="auth-grid"
          />
        )}
        <header className="auth-header">
          <Logo signup={signup} />
        </header>
        <div className="auth-intro">
          <h2>{signup ? "Sign up and come in" : "Sign in with ease"}</h2>
          <p>
            {signup
              ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
              : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
          </p>
        </div>
        <AuthArtwork signup={signup} />
        <AuthForm signup={signup} />
      </div>
    </main>
  );
}
