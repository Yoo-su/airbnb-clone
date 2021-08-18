import {useState} from 'react';
import ReactMapGl, {Marker, Popup, FlyToInterpolator} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

function Map({searchResults}) {
    const coordinates=searchResults.map(result=>({
        longitude:result.long,
        latitude:result.lat,
    }));

    const center=getCenter(coordinates);
    const [selectedLocation,setSelectedLocation]=useState({});

    const [viewport,setViewport]=useState({
        width:'100%',
        height:'100%',
        latitude:center.latitude-0.15,
        longitude:center.longitude,
        zoom:11,
    })

    return (
        <ReactMapGl
            mapStyle='mapbox://styles/bonajoy/cksgy5z3j2b3618qqled3id5t'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport)=>{
                setViewport(nextViewport)
            }}
        >
            {searchResults.map(result=>(
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}>
                            <p 
                            role='img'
                            className='animate-bounce cursor-pointer text-2xl'
                            onClick={()=>{
                                setSelectedLocation(result);
                                setViewport({
                                    ...viewport, 
                                    longitude:result.long, 
                                    latitude:result.lat-0.04, 
                                    zoom:13,
                                    transitionDuration: 2000,
                                    transitionInterpolator: new FlyToInterpolator(),
                                })
                            }}
                            aria-label="push-pin"
                            >🎈</p>
                        </Marker>

                        {/*  */}
                        {selectedLocation.long===result.long?(
                            <Popup
                                onClose={()=>setSelectedLocation({})}
                                closeOnClick={true}
                                latitude={result.lat}
                                longitude={result.long}
                            >
                                {result.title}
                            </Popup>
                        ):(false)}

                </div>
            ))}
        </ReactMapGl>
    )
}

export default Map
