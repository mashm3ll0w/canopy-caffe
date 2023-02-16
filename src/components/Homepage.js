import { useNavigate } from "react-router-dom";

export default function Homepaage() {

  const navigate = useNavigate()

  function handleClick(e){
    if(e.target.textContent === "EXPLORE"){
      navigate("/cart")
    }
    else{
      navigate("/about")
    } 
  }

	return (
		<div id="header">
			<h1 className="hero-heading">DRINKS TO JACK YOUR MIND</h1>
			<p className="tagline">Darkest Berries. Sweetest...</p>
			<p className="tag-inventory">
				We stock the sickest (no pun intended) inventory of Coffee, Tea, Juices, Milkshakes, Pastries and more. <br /> Whatever it takes to get you moving.
			</p>
			<div className="home-buttons">
				<button className="btn btn-custom" type="button" name="menu-button" onClick={handleClick}>
					EXPLORE
				</button>
				<button className="btn btn-custom" type="button" name="menu-button" onClick={handleClick}>
					LEARN MORE
				</button>
			</div>
		</div>
	);
}
