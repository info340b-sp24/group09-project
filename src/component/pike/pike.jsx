import React from 'react'
import imgp from '../image/Pike.jpg';
import './pike.css'

export default function pike() {
  return (
    <div><br></br><br></br>
      <div class="body-container">
            <div class="detail">
                <section>
                    <h2 className='h2'>Pike Place Market</h2>
                    <img src={imgp} class="detail-image-size" />
                </section>
                <section>
                    <p>Description: Pike Place Market is Seattle's original and largest incubator of small, independent
                        businesses.In addition, the Market is a vibrant and thriving historic neighborhood that includes
                        five social service programs, 220+ independently owned shops & restaurants, 160+ craftspeople,
                        70+
                        farmers, 60+ permitted buskers, 450+ residents in the Market's affordable housing, and one
                        foundation. Learn more about the Market community by tapping or clicking the buttons below.</p>
                    <p>Operating Hour: 09:00 - 18:00</p>
                    <p>Address:85 Pike St
                        Seattle, WA 98101
                        United States</p>
                    <p>Minimum Cost: 0$</p>
                    <p>Estimated Duration: 3hr</p>
                    <a href="https://www.pikeplacemarket.org/about-pike-place-market/"> Source </a>

                </section>
            </div>
        </div>
    </div>
  )
}
