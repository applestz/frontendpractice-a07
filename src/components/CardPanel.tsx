'use client'
import { useReducer } from "react";
import Card from "./Card";

export default function CardPanel() {
    const ratingReducer = (venueList:Map<string, number>, action:{type: string, venueName: string, rating?: number})=>{
        switch(action.type) {
            case 'add': {
                return new Map(venueList.set(action.venueName, action.rating??0))
            }
            case 'remove': {
                venueList.delete(action.venueName)
                return new Map(venueList)
            }
            default: return venueList
        }
    }

    let defaultVenue = new Map<string, number>([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0]
    ])

    const [venueList, dispatchRating] = useReducer(ratingReducer, defaultVenue)

    return (
        <div>
            <div style={{margin:"20px", display:"flex", flexDirection:"row",
                flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                <Card venueName="The Bloom Pavilion" imgSrc="/bloom.jpg" onRating={(venue:string, rating:number)=>dispatchRating({type:'add', venueName:venue, rating:rating})}/>
                <Card venueName="Spark Space" imgSrc="/sparkspace.jpg" onRating={(venue:string, rating:number)=>dispatchRating({type:'add', venueName:venue, rating:rating})}/>
                <Card venueName="The Grand Table" imgSrc="/grandtable.jpg" onRating={(venue:string, rating:number)=>dispatchRating({type:'add', venueName:venue, rating:rating})}/>
            </div>
            <div className="w-full text-xl font-medium">
                Venue List with Ratings : {venueList.size}
            </div>
            {Array.from(venueList.entries()).map(([venue, rating]) => (
                    <div key={venue} data-testid={venue}
                    onClick={()=>dispatchRating({type:'remove', venueName:venue, rating:rating})}>
                        {venue} : {rating}
                    </div>
                ))}
        </div>
    )
}