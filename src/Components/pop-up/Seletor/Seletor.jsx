import React from 'react';

const Seletor = () => {
    const handleSizeClick = (selectedSize) => {
        document.querySelectorAll('.size-6').forEach(input => input.checked = false);
        document.getElementById(selectedSize).checked = true;
    };

    return (
        <div className="flex flex-row shadow-lg font-poppins bg-branco justify-around">
            <div className="pr-20 pl-4 rounded-b-lg ">

                <p className="my-5" onClick={() => handleSizeClick('P')}>P</p>
                <p className="my-5" onClick={() => handleSizeClick('M')}>M</p>
                <p className="my-5" onClick={() => handleSizeClick('G')}>G</p>
            </div>
            <div className="pr-4 pl-20 rounded-lg flex flex-col">

                <input type="radio" name="size" className="my-3 size-6 accent-primaria" />
                <input type="radio" name="size" className="my-3 size-6 accent-primaria" />
                <input type="radio" name="size" className="my-3 size-6 accent-primaria" />
            </div>
        </div>
    );
};

export default Seletor;
