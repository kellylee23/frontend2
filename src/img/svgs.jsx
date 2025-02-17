import React from 'react';

// 첫 번째 WaveIcon
export const WaveIcon = () => (
  <svg
    width="40"
    height="6"
    viewBox="0 0 40 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.821949 5.9744C0.538713 6.00767 0.264669 6.00939 0 5.9744H0.821949C5.86438 5.38215 13.8206 -5.20924 23.6735 3.28555C26.5306 5.74889 28.5931 -3.89021 33.8776 3.28557C35.5102 5.50257 37.38 5.9744 39.8962 5.9744H0.821949Z"
      fill="#3A00F9"
    />
  </svg>
);

// 두 번째 WaveIcon (WaveIcon2)
export const WaveIcon2 = () => (
  <svg
    width="40"
    height="15"
    viewBox="0 0 40 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.877562 14.9301C0.58106 15.0208 0.288774 15.0257 0 14.9301H0.877562C5.69079 13.4576 11.6152 -10.6272 21.6668 5.58844C24.1668 9.62158 26.6668 -2.47794 31.6668 5.05064C36.6668 12.5792 37.38 14.9301 39.8962 14.9301H0.877562Z"
      fill="url(#paint0_linear_101_190)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_101_190"
        x1="40"
        y1="7.5"
        x2="0"
        y2="7.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.532235" stopColor="#F2F2F2" />
        <stop offset="1" stopColor="#F2F2F2" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export const Voice = () => (
<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.24538 16.9449C8.42889 16.3155 8.27723 15.1434 8.90664 14.3269C11.0138 11.5934 11.7126 10.0111 11.7126 8.66664C11.7126 7.32215 11.0138 5.73991 8.90664 3.00641C8.27723 2.18992 8.42889 1.01778 9.24538 0.388367C10.0619 -0.241045 11.234 -0.0893851 11.8634 0.727108C14.0152 3.51852 15.4459 5.9737 15.4459 8.66664C15.4459 11.3596 14.0152 13.8148 11.8634 16.6062C11.234 17.4227 10.0619 17.5743 9.24538 16.9449ZM5.05038 14.4421C4.20772 13.8482 4.00606 12.6836 4.59997 11.8409C5.78648 10.1575 6.08437 9.30816 6.08437 8.66638C6.08437 8.0246 5.78648 7.1753 4.59997 5.49182C4.00606 4.64915 4.20772 3.48457 5.05038 2.89066C5.89305 2.29675 7.05763 2.49841 7.65154 3.34108C8.89874 5.11066 9.81771 6.78476 9.81771 8.66638C9.81771 10.548 8.89874 12.2221 7.65154 13.9917C7.05763 14.8343 5.89305 15.036 5.05038 14.4421ZM0.257386 9.42117C-0.26472 10.3101 0.0326627 11.454 0.921609 11.9761C1.81055 12.4982 2.95444 12.2008 3.47654 11.3119C3.91872 10.559 4.34206 9.69198 4.34206 8.66655C4.34206 7.64113 3.91872 6.77408 3.47654 6.02123C2.95444 5.13228 1.81055 4.8349 0.921609 5.357C0.0326626 5.87911 -0.26472 7.02299 0.257386 7.91194C0.434045 8.21272 0.524597 8.40357 0.571455 8.53091C0.593238 8.59011 0.602071 8.62644 0.605695 8.64489C0.607506 8.65411 0.608194 8.65977 0.608464 8.66247L0.608727 8.66655L0.608464 8.67064C0.608194 8.67334 0.607506 8.679 0.605695 8.68822C0.602071 8.70667 0.593238 8.743 0.571455 8.8022C0.524597 8.92954 0.434045 9.12039 0.257386 9.42117Z" fill="url(#paint0_linear_101_196)"/>
<defs>
<linearGradient id="paint0_linear_101_196" x1="15.4459" y1="8.66664" x2="-5.44479" y2="8.66664" gradientUnits="userSpaceOnUse">
<stop offset="0.480034" stop-color="#3A00F9"/>
<stop offset="0.814272" stop-color="#3A00F9" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
);

export const Breathe = () => (
<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.69911 10.2482V12.4054V12.4055C2.69918 14.9429 4.95229 16.9999 7.73164 16.9999C10.349 16.9999 12.4996 15.1758 12.7415 12.844C15.2956 12.6232 17.2937 10.6597 17.2937 8.27011C17.2937 5.85724 15.2565 3.87879 12.6667 3.69024C12.2066 1.5858 10.172 0 7.73164 0C5.12205 0 2.97637 1.8134 2.72394 4.13525H2.69911V4.59457V6.29261C2.28323 6.17976 1.82174 6.20892 1.38664 6.42478L1.03709 6.59819C-0.345695 7.28419 -0.345698 9.25658 1.03709 9.94258L1.38664 10.116C1.82174 10.3318 2.28323 10.361 2.69911 10.2482Z" fill="url(#paint0_linear_101_204)"/>
<defs>
<linearGradient id="paint0_linear_101_204" x1="17.2937" y1="8.49997" x2="-1.89869" y2="8.49997" gradientUnits="userSpaceOnUse">
<stop offset="0.65" stop-color="#3A00F9"/>
<stop offset="0.905024" stop-color="#3A00F9"/>
</linearGradient>
</defs>
</svg>
)

export const Speed = () => (
<svg width="26" height="9" viewBox="0 0 26 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.9785 3.29904C17.0186 -0.781937 7.97666 -1.65486 0.346716 4.01325C-0.549068 4.67871 0.459538 5.77225 1.46229 5.2826C8.24501 1.97054 14.5825 2.98862 18.8184 5.86785L18.6229 6.02677C18.0655 6.47988 18.3108 7.26507 19.0645 7.44034L23.8655 8.55669C24.6196 8.73205 25.3169 8.16527 25.1201 7.5368L23.8676 3.53605C23.6709 2.90794 22.7287 2.68927 22.1713 3.14238L21.9785 3.29904Z" fill="url(#paint0_linear_101_214)"/>
<defs>
<linearGradient id="paint0_linear_101_214" x1="25.1538" y1="4.29449" x2="0" y2="4.29449" gradientUnits="userSpaceOnUse">
<stop offset="0.64426" stop-color="#F2F2F2"/>
<stop offset="1" stop-color="#F2F2F2" stop-opacity="0.5"/>
</linearGradient>
</defs>
</svg>
)

export const Pdf = () => (
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="25" height="25" fill="url(#pattern0_101_234)"/>
<defs>
<pattern id="pattern0_101_234" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_101_234" transform="scale(0.0078125)"/>
</pattern>
<image id="image0_101_234" width="128" height="128" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAgKADAAQAAAABAAAAgAAAAABIjgR3AAAKF0lEQVR4Ae1dacgWVRT+zFzaF9F2+9GeidiCbYaVbWpaqWVBIpVggUmbtFNRURKUFRVB9KPPsvRHthCSQgWaWJHttkJGmWRli2Wi1fPkN2/zjXfeuXfmzHrPgeebmTvnnrn3nGfO3Lkz73wdHcXKABzuEmA+8C6wBvgb+Kch2IB+nAmoRDwwENudwGagKcGO64eSIBL8mdj+04PAhwlBEpwV8YN3m33R4zlA2DE+rZMEo7yLeleHt8FyAeBTwE199ZYE92nwW+QnCUYD3shw9NR0Nvhc9hd84g0JlioBjCcASTAGqJT0EG7NqbC3yNLm69BbAnwMbDLUYcYwiVQ5bUvYOgV2ppsaaijbiLLxwEuGfY0oehi9SEr1nPwZ14jebunEFCyS+hzez0xw9paqzfu7KsEZPNOPa1i3pyT0ORz8YJ0kGNswP3TsauGI+5vWafRnikW/g8CHl5UgAe/XpWRvC0MLLXR8UemNjvKZSKmXQ0kC7GkRufcsdHxS6YXOzgNKI4EkAcjoJOEzAZXuHghIcE734mK2JAlQTIubeRSS4DmgcBIoAapDqIAE5xbZJCVAkd5OPhZJ8CxwXrKqjIYSQMaPklYKJYESQDJ0cra2hSlmAk4b5ypKgFzdm8k4STAXyJUESoBMMcq9ckCCCXkdSQmQl2fl7JIEzwAT5Uz+b0kJ8L8vqrxGEjwNiJNACVDlsHdvW0CC87sXZ9tSAmTzX9G1SYI5gBgJlADZQ/hjdhNOFoJMcIFTrRhlJUCMYxyK33bQlVLtCUPMBJOyGlQCZPVgR8dqmPg2uxlnCyRBJ5CJBEoAZ78bKyw3luZfGJDgwvwPlXwE/io2/MqTaZ2vjTVRhqBTfOPX1Ociyviu5UVlO9ZnAtD3twJFBDvuGKWTwHcCcHT+VgVI0A9tsBYdA1i7KlGRZ+AI4CGAZ2kZwjEBHydbixLA2lVWiuuhdSVwMvChVQ15JSfyMW2pyHuAP3sbDOwOHAUcA+wHUIIABUtTWbAvuhwK5ZNYoY1I/9yvzaG67/J9DNDdG/lszYBZkqIdbF7Pb7VOLwEtV9RiJcgIYo1VAoi5sp6GlAD1iptmgHrFS7y1SgBxl3puUC8B9SKAZoB6xav6rdUMUP0YhVuoGSDsDQ/XlQAeBj3XLuslIFf3ihvXDCDuUs8NagaoFwE0A9QrXuKtVQKIu9Rzg3oJqBcBNAPUK17Vb61mgOrHKNxCzQBhb3i4rgTwMOi5dlkvAbm6V9y4ZgBxl3puUDNAvQigGaBe8RJvrRJA3KWeG9RLQL0IoBmgXvESb604AbL8OJT/Ev4m4FhgEMCfJifJz0kKHuznP4viv855A7gLWAfUTviJsl8BMlKR3gf8uNQJgK1cDMUkf+f+49CD0YgngZ1sW616sR7gf1rjd4B3jtXIeUeaQeAstGm7nNvlk3l+N+Aayw7z7BeVNAQYJtoCNUYP2F4GSifAbmis0zVG42vlAX5NpBRxzQB9Smll8w9q69fSM0DzQ+FZD10zgGfuqVx3NQNULiTFNkgJUKy/m3+0LFPBrt7pRIVlAKeDo9iAsr2AfbpwCJZTgQFAnDyKHfwYY9QWt/nhZk6y0N6+XUtOXfPfsvYHbITf4/vNRjGiw//3x8myPEQ8A7g2kreAbEQauP5j5O1xnBnA6pjjHYtyVwlsfoOKSX1I+2XzFRa2o8e2fR7AKfho3ei20216lQeBf6Czs4ERAJ87SEhg8wAYuwLgg5k6CYMtKlUhQLt2fIoeTwYkO89LBC8howF+37cuIumD//pc5BjA5OTrUHgDwHT7E8D/v3MbwLFCWBZgYzEwMlxoWOecOs/sfsBagOT5BHgE+AqICm1OA56K7ojZ5tM4PvpuJ3u121n3fdJjgHvgkOg1jGn6MIOjbo/omsYAD0R0Att/ovxWoDdgkldRGOgGS5IyKs+jINgvuVwXPVDMNv+FbNJxaz8G4JPGSw0OeNNQZlvUF4okEGESEtFLaXftLdMhAw0H/85Q5lp0LSqYHry8hnJeMqouPPtFpaoE+MDQy8MNZa5FHPNw3BGVzShYFC2s4LY4AcoeBJp8zNekHjPsOMJQlqYojkicG0gSTjyZxgZBPU4+HRRs1GFZNgH+Djnpd6y/DNwI/BAq5yoz1RmRsrSbnGU0CSeckuTmBAXeUfD2Mi9pXAZgsO8FODqPBj3sxKuwcXS4IMP6jqjL9xmj07y8U6i6NI4AdPgvCV4/BvvvTNBx2U2iRYPP+gNcjDRFt6qDQPp3D+BxYBnA2zgpWRljyOn+OcZG3sWNzACB05iWOUd/IDAUmA6wTFriCHCoxYE4ETTOQq82KmUPAjkxc3mXt/o7ei3N2cDbPWaVqOyGguHRwgpup+lz226UTYA+aJ1r4IMO9QhWHJYPQvdtg/5YlJXtC0OztioSJ0CVxwBb9T5jASd6bjHYYOCvN5R7UeQDATixNAk4DVhviCovQTbXf0PVwovEM0Ad0p6Ll/lY96OuCl9i+RlAAsQ57hTsmwV4K00jwDuIJGEjY6A0F5C8xbQ5bhadOCKntunDJSDqHM4vdAIvAjtEd1Z8W5wATcsApvixj3wz+EhgMjAK6AWowANFEoBv5EyLeD3L69NPwBYf4PCFUU4nB+iJ9f1D4KvhLHOV+aiwKVKJE1RlSq0zgLTz+Fg37tGuRJBOlTBSdRs+jgGqHpN27RPPAEqAdu6u3r7SCRB+gaN67qlvi0rzq2sG4LN0vrmjIuuBLyzNlZ4B2IAVlo1VNXsPLLdXldV0zQA8+t2yTfDeGl9Fm23phdIzANv5CvCAZYNVrb0HeO2/Gvi8vVprrzgBWpZTrExEna8BNkrh7oP34bcTARcZCeUkXzu92pZlJnAeGkPwx5CDgGHAnUA7mYCdpkey7eo0bd8GdIjB549hXUU8A2QhQNB4TscSNrYWQ29dUFGXzh4QJ0CaQaBzq7VCdT2gBKhubEwt0wxg8oqWpfeAZoD0viujZqUzwEYLj/DjDyrpPWDjP5s4tFogmQG+b1mNXxkSv0v3WHggyX8M/s8WdloqkgSw+YLHGa0j60oaD5yeUIm34+KXiYRjdtu9qqsBbIQJfMXquG41dMPWA1OgaPJpuOwFW2N56T1s0cg10OEr2Sr2HuCPVziDGg62af0ye5NbNNP8vq7dMfge3aJ2CqF9/DTbMmAlUNoLEaH2VG21Nxo0GBgB2Hwcg9l1P8BmLAa1/GQpTJvYqWX5+uXR/ELqZnm4EqDwE4BvaTk9BQxCmuZ9+aBu3JIDQX7Y4fg4BS0X98BUWFwibjWDQd5eLgA07efvg1kZ4pRr1b6wPkdJkNtJwIHzHYD0QB4mZWUmzPG9N80Gcj5YC3+Olw1TvtYGwnwnsBlQIqT3AU8kpvxdABEpOn3wW3ycBBoFHADsDfQHim4HDll54cnCSTNOsX8E8OfsCwGO+MXkX8htOx3uHmptAAAAAElFTkSuQmCC"/>
</defs>
</svg>
)

export const Plus = () => (
<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_327_321)">
<path d="M7.5 5V10M5 7.5H10M13.75 7.5C13.75 10.9518 10.9518 13.75 7.5 13.75C4.04822 13.75 1.25 10.9518 1.25 7.5C1.25 4.04822 4.04822 1.25 7.5 1.25C10.9518 1.25 13.75 4.04822 13.75 7.5Z" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_327_321">
<rect width="15" height="15" fill="white"/>
</clipPath>
</defs>
</svg>
)




  
