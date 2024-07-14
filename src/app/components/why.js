'use client'

import { Box, Center, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Why() {
    return (
        <Box
            w={'full'}
            h={'100vh'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            px={['50px', '50px', '100px', '100px']}
            pt={['900px', '900px', '0px', '0px']}
        >
            <Box
                w={'full'}
                h={'auto'}
            >
                <svg width="100%" height="100%" viewBox="0 0 1132 413" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.136 64L0.832 31.744H8.704L14.592 53.312L20.928 31.744H28.16L34.496 53.312L40.448 31.744H48.256L38.016 64H31.04L24.576 42.304L18.048 64H11.136ZM55.5905 64V17.92H63.3985V36.736C65.1905 33.216 68.9025 31.232 73.5105 31.232C80.7425 31.232 85.4785 36.48 85.4785 44.032V64H77.6705V45.696C77.6705 41.28 74.9185 38.208 70.8865 38.208C66.5345 38.208 63.3985 41.664 63.3985 46.4V64H55.5905ZM121.671 31.744L110.407 62.464L105.415 77.056H97.9265L102.471 64L90.6945 31.744H98.6945L106.183 53.888L113.607 31.744H121.671ZM140.295 52.032C134.343 52.032 130.247 49.216 130.247 43.712C130.247 31.744 147.591 36.864 147.591 29.824C147.591 26.88 145.287 25.088 141.447 25.088C137.351 25.088 134.535 27.584 134.407 31.744H126.983C127.239 23.808 133.063 18.688 141.447 18.688C149.767 18.688 155.463 23.168 155.463 30.08C155.463 42.496 137.863 38.464 137.863 43.392C137.863 45.184 139.143 45.888 141.063 45.888H149.191V52.032H140.295ZM137.543 55.68H146.055V64H137.543V55.68Z" fill="#242424" />
                    <path d="M114.105 85C127.623 85 140.743 87.0425 153.465 91.1275C166.453 95.2125 178.115 101.22 188.452 109.149C198.789 117.079 207.006 126.691 213.102 137.985C219.463 149.278 222.644 162.014 222.644 176.191C222.644 194.694 217.873 210.673 208.331 224.13C198.789 237.346 186.332 247.438 170.959 254.407C155.586 261.375 139.285 264.859 122.056 264.859C111.984 264.859 102.973 264.018 95.0211 262.336C87.0696 260.414 80.1782 258.011 74.3471 255.127V326.495H0V85H114.105ZM74.3471 148.077V221C74.3471 214.224 83.6239 206.588 88.6599 207.549C93.9609 208.511 99.527 208.991 105.358 208.991C117.02 208.991 126.695 205.747 134.381 199.259C142.333 192.531 146.309 184.842 146.309 176.191C146.309 166.339 142.333 159.251 134.381 154.925C126.695 150.36 117.02 148.077 105.358 148.077H74.3471Z" fill="#242424" />
                    <path d="M315.502 137.264C326.104 137.264 336.441 139.426 346.513 143.752C356.85 147.837 365.332 153.123 371.958 159.611V142.67H440.341V326.495H371.958V295.857C366.922 305.949 359.236 314.48 348.899 321.448C338.561 328.417 326.104 331.901 311.526 331.901C296.418 331.901 282.238 328.417 268.985 321.448C255.733 314.48 244.866 303.787 236.384 289.369C228.167 274.711 224.059 256.329 224.059 234.222C224.059 213.557 228.167 196.015 236.384 181.598C244.866 167.18 255.998 156.247 269.781 148.798C283.828 141.108 299.069 137.264 315.502 137.264ZM329.815 197.818C320.008 197.818 311.791 201.422 305.165 208.631C298.804 215.84 295.623 224.37 295.623 234.222C295.623 244.074 298.936 252.364 305.563 259.092C312.189 265.821 320.936 269.185 331.803 269.185C337.634 269.185 343.598 267.863 349.694 265.22C352.722 263.787 355.191 261.139 357.428 258.158C361.581 252.626 361.695 245.308 359.118 239.045C354.714 228.345 350.629 212.818 363.857 212.556L371.958 212.956C366.127 208.631 359.501 205.026 352.079 202.143C344.923 199.259 337.501 197.818 329.815 197.818Z" fill="#242424" />
                    <path d="M524.453 142.67L569.379 240.349L606.429 194.333L685.742 178.858L543.537 413H467.202L531.212 310.635L445.733 142.67H524.453Z" fill="#242424" />
                    <path d="M886.472 142.67V252.965C886.472 269.545 882.231 283.722 873.749 295.497C865.533 307.271 854.135 316.282 839.557 322.53C824.98 328.777 808.281 331.901 789.463 331.901C770.644 331.901 753.946 328.777 739.368 322.53C724.79 316.282 713.26 307.271 704.779 295.497C696.562 283.722 692.454 269.545 692.454 252.965L689.146 178.858L758.036 194.333L761.235 236.385C761.235 248.88 763.355 258.011 767.596 263.778C772.102 269.545 779.391 272.429 789.463 272.429C799.535 272.429 806.691 269.545 810.932 263.778C815.438 258.011 817.691 248.88 817.691 236.385L818.088 142.67H886.472Z" fill="#242424" />
                    <path d="M1044.53 137.264C1059.64 137.264 1073.82 140.748 1087.07 147.716C1100.59 154.685 1111.46 165.378 1119.68 179.796C1127.89 194.213 1132 212.596 1132 234.943C1132 255.608 1127.76 273.149 1119.28 287.567C1111.06 301.985 1099.93 313.038 1085.88 320.727C1072.1 328.177 1056.99 331.901 1040.56 331.901C1029.95 331.901 1019.49 329.859 1009.15 325.774C999.076 321.448 990.727 316.042 984.101 309.554V413H915.718V142.67H984.101V173.308C989.137 163.215 996.823 154.685 1007.16 147.716C1017.5 140.748 1029.95 137.264 1044.53 137.264ZM1024.26 199.98C1018.69 199.98 1012.73 201.422 1006.37 204.305C1000.27 206.949 994.968 211.154 990.462 216.921C986.221 222.448 984.101 229.656 984.101 238.547L985.993 280.358C985.993 280.358 990.5 258.111 1003.98 267.022C1011.4 269.906 1018.82 271.347 1026.24 271.347C1036.32 271.347 1044.53 267.743 1050.89 260.534C1057.26 253.085 1060.44 244.555 1060.44 234.943C1060.44 225.091 1057.12 216.801 1050.5 210.073C1043.87 203.344 1035.12 199.98 1024.26 199.98Z" fill="#242424" />
                </svg>

            </Box>
        </Box>
    );
}