import dynamic from "next/dynamic";

//dynamically importing and exporting the map component 

const Map = dynamic(() => import('./map'), {
    ssr: false
})

export default Map;