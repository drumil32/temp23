import React from "react";

const ImageMap = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen p-4 mb-10">
      <div className="text-center text-[24px] leading-[34px] text-[#3c3950] font-montserrat font-normal mb-4">
        <h4>
          Protsahan’s Adolescent Girl Framework
          <br />
          Empowering the Agency of Girls in Underserved Communities
          <br />
          Through The Lens of Intersectionality
        </h4>
      </div>
      <div className="w-[70%]">

      <svg
        style={{ width: "100%" }}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 2742 1542"
        >
        <image xlinkHref="heart-model.jpeg" style={{ width: "2742px" }} />
        <a xlinkHref="/health" target="_blank" xlinkTitle="Health">
          <g>
            <polygon
              className="image-mapper-shape"
              data-index="1"
              points="765.573 598.917 794.217 666.621 807.236 718.701 815.048 770.781 854.108 736.929 906.188 710.889 945.248 703.077 979.1 703.077 1010.35 710.889 1046.8 729.117 1075.45 752.553 1101.49 786.405 1132.73 762.969 1169.19 742.137 1205.65 723.909 1255.12 703.077 1301.99 690.057 1343.66 682.245 1387.93 679.641 1437.4 679.641 1419.17 635.373 1398.34 591.105 1359.28 539.026 1294.18 479.134 1234.29 447.886 1158.77 427.054 1098.88 427.054 1046.8 432.262 989.516 447.886 916.604 484.342 861.92 520.798 812.444 572.878 770.781 531.214 723.909 492.154 664.017 460.906 716.097 520.798"
              ></polygon>
          </g>
        </a>
        <a xlinkHref="/education" target="_blank" xlinkTitle="Education">
          <g>
            <polygon
              className="image-mapper-shape"
              data-index="2"
              points="1190.02 789.009 1265.54 755.157 1315.01 742.137 1364.49 731.721 1408.76 731.721 1445.21 734.325 1450.42 773.385 1442.61 843.692 1432.19 893.168 1408.76 953.06 1372.3 1020.76 1322.83 1093.68 1260.33 1163.98 1221.27 1203.04 1169.19 1158.77 1122.32 1130.13 1096.28 1114.51 1057.22 1098.88 1012.95 1083.26 1070.24 1020.76 1106.7 958.268 1119.72 916.604 1124.92 864.524 1122.32 838.484"
              ></polygon>
          </g>
        </a>
        <a xlinkHref="/art" target="_blank" xlinkTitle="Art">
          <g>
            <polygon
              className="image-mapper-shape"
              data-index="3"
              points="799.424 1505.11 721.305 1450.42 674.433 1416.57 700.473 1343.66 726.513 1296.79 752.553 1252.52 781.197 1216.06 815.048 1234.29 882.752 1187.42 937.436 1148.36 966.08 1124.92 1012.95 1137.94 1062.43 1158.77 1101.49 1179.61 1153.57 1213.46 1161.38 1221.27 1182.21 1239.5 1145.76 1270.75 1093.68 1312.41 1049.41 1346.26 986.912 1390.53 895.772 1455.63 822.86 1507.71 812.444 1510.31"
              ></polygon>
          </g>
        </a>
        <a xlinkHref="/rights" target="_blank" xlinkTitle="Rights">
          <g>
            <polygon
              className="image-mapper-shape"
              data-index="4"
              points="630.165 1385.32 645.789 1338.45 658.809 1309.81 674.433 1281.16 697.869 1239.5 718.701 1208.25 736.929 1182.21 713.493 1166.59 682.245 1143.15 648.393 1117.11 614.541 1085.86 583.293 1054.62 554.65 1018.16 523.402 968.684 505.174 916.604 499.966 882.752 471.322 874.94 427.054 872.336 387.994 874.94 351.538 880.148 317.687 887.96 289.043 898.376 249.983 914 208.319 934.832 223.943 973.892 255.191 1028.58 270.815 1049.41 294.251 1083.26 322.895 1117.11 359.35 1158.77 401.014 1200.44 455.698 1252.52 528.61 1312.41"
              ></polygon>
          </g>
        </a>
        <a xlinkHref="/technology" target="_blank" xlinkTitle="Technology">
          <g>
            <polygon
              className="image-mapper-shape selected"
              data-index="5"
              points="190.091 882.752 223.943 867.128 260.399 851.504 299.459 841.088 351.538 828.068 387.994 822.86 429.658 822.86 479.134 825.464 507.778 828.068 515.59 799.424 541.63 762.969 570.273 734.325 606.729 713.493 640.581 705.681 679.641 703.077 721.305 713.493 755.157 726.513 747.345 695.265 734.325 653.601 700.473 591.105 658.809 531.214 609.333 481.738 578.085 455.698 541.63 427.054 481.738 427.054 419.242 440.074 356.746 466.114 304.667 502.57 263.003 546.838 226.547 593.709 197.903 650.997 177.071 731.721 177.071 809.84"
              ></polygon>
          </g>
        </a>
        <style>{`.image-mapper-shape {
fill: rgba(0, 0, 0, 0);
stroke: none;
transition: all 0.3s ease;
}

.image-mapper-shape:hover {
    fill: rgba(255, 255, 255, 0.5); /* Light translucent fill on hover */
    }
    `}</style>
      </svg>
    </div>
    </div>
  );
};

export default ImageMap;
