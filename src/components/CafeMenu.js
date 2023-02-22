import CafeItem from "./CafeItem";
import Filter from "./Filter";

export default function CafeMenu({menu, handleSearch, filter}) {
     const afterFilter = menu.filter((item)=>item.name.toLowerCase().includes(filter.toLocaleLowerCase()))
	return (
		<>
		    <Filter filter={filter} handleSearch={handleSearch} />
			<div className="menu-container container-fluid">
			    
			   
				{afterFilter.map((item) => (
					<CafeItem key={item.id} item={item} />
				))}
			
				
			</div>
			
			</>
	);
}