// React
import { Dispatch, SetStateAction, useState } from "react";
// Rc-slider
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface PriceRangeSliderProps {
    reference: any;
    setPriceValue: Dispatch<SetStateAction<number | number[]>>;
}

export default function PriceRangeSlider({ reference, setPriceValue }: PriceRangeSliderProps) {
    // Valori degli step
    const marks = {
        25: '25',
        50: '50',
        100: '100',
        200: '200',
        350: '350'
    };

    return (
        <div
            ref={reference}
            className="w-full md:w-1/3">
            {/* Slider */}
            <Slider
                min={25}
                max={350}
                step={null}
                marks={marks}
                defaultValue={10}
                onChange={(val) => setPriceValue(val)}
                // Stile del dot selezionato
                handleStyle={{
                    borderColor: '#8E64FF',
                    height: '24px',
                    width: '24px',
                    marginTop: '-8px',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                }}
                // Stile della barra di sfondo selezionata
                trackStyle={{
                    backgroundColor: '#8E64FF',
                    height: '10px',
                }}
                // Stile della barra di sfondo non selezionata
                railStyle={{
                    backgroundColor: '#5A5C74',
                    height: '10px'  // Aumenta l'altezza del rail
                }}
                // Stile per i dots non selezionati
                dotStyle={{
                    borderColor: '#8E64FF',
                    height: '18px',  // Dimensioni della dot
                    width: '18px',
                    backgroundColor: '#ffffff',  // Colore dello sfondo della dot
                    marginBottom: '-7px',  // Allinea verticalmente le dots al centro della traccia
                    borderWidth: '2px',  // Bordo per renderle più evidenti
                }}
            />
        </div>
    );
}