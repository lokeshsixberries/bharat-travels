import Link from "next/link";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "+919586009193";
const DEFAULT_MESSAGE = "Website under development";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </Link>
  );
}