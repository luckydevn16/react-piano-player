import React, {useState} from 'react';
import './Info.styles.scss';

import Cactus from '../../Assets/Cactus.gif';
import sad_cactus from '../../Assets/hug.gif'

export default function ToDo() {

    const [checkbox,setScheckbox] = useState<string>('false');

    return (
        <div className='Info_Main'>
            <div className="Contributes">
                <h1 className='Contributes_h1'>List of all additional data</h1>
                <ul className='_List'>
                    <li className="L_Element"><a target='_blank' href='license' rel='noreferrer' download='License_PBA_2021-2022.txt'>App License</a></li>
                    <li className="L_Element"><a target='_blank' href='Authors' rel='noreferrer' download='Authors_PBA_2021-2022.txt'>Authors & Info</a></li>
                    <li className="L_Element"><a target='_blank' href='Contribute.txt' rel='noreferrer' download='Contributes_PBA_2021-2022.txt'>Used things (Contributing Authors) </a></li>
                    <li className="L_Element"><a target='_blank' href='dependencies.txt' rel='noreferrer' download='NPM_Dependencies_PBA_2021-2022.txt'>List of All Dependencies</a></li>
                    <li className="L_Element"><a target='_blank' href='https://github.com/tzmcion/ReactPianoPlayer' rel='noreferrer'  >Source Code (Last Update 11 Nov)</a></li>
                </ul>
            </div>
            <div className="Support">
                <h1 className='Support_h1'>Support / Donate</h1>
                <div className='Support_Data'>
                    <div className="Supp_img">
                        <img src={checkbox === 'checked' ? Cactus : sad_cactus} alt="Cactus gif" />
                    </div>
                    <div className="Support_don">
                        <div className='inp'>
                            <input type='checkbox' value={checkbox} onChange={(e)=>{setScheckbox(checkbox === 'false' ? 'checked': 'false')}} />
                            <p>&#60;-- Click to accept</p>
                        </div>
                        <h3 className='data_don'>I understand what a <a href="https://en.wikipedia.org/wiki/Donation">Donation</a> is and I accept a fact that I'm not receiving any goods from this payment</h3> 
                        {checkbox ==='checked' &&
                        <form action="https://www.paypal.com/donate" method="post" target="_top">
                            <input type="hidden" name="hosted_button_id" value="TLEW452UQRPFG" />
                            <input type="image" src="https://www.paypalobjects.com/en_US/PL/i/btn/btn_donateCC_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            <img alt="" src="https://www.paypal.com/en_PL/i/scr/pixel.gif" width="1" height="1" />
                        </form>}
                    </div>
                </div>
            </div>
        </div>
    )
}