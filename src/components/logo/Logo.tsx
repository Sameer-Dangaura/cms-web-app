import logo from "../../assets/images/OneLine Shop.png";

export default function Logo({ className = "size-50 rounded-full object-cover" }: Readonly<{ className?: string }>) {
    return <img src={logo} alt="OneLine Shop image" className={className}></img>
}

/*
- `rounded-full` => equivalent to `border-radius: 9999px` in CSS, which makes the image circular if it's a square.
- `size-50` => equivalent to `width: 50px; height: 50px;` in CSS, which sets the size of the image to 50 pixels by 50 pixels.
*/