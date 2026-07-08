import { ChevronLeft } from 'lucide-react';

export default function BackBtn({ onClick }) {
  return (
    <button className="mo-back" onClick={onClick} aria-label="뒤로">
      <ChevronLeft size={28} color="#1f2937" />
    </button>
  );
}
