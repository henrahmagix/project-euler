var x=[], sum=0;
/**
 * The following sed command (with @ as delimiter) formatted the below series of x.push():
 * sed -i.bak -e 's@^\([0-9]\{10\}\).*@\1@' -e 's/^/x.push(Math.round(/' -e 's/$/\/10));/' <file_of_numbers>;
 */
x.push(Math.round(3710728753/10));

x.push(Math.round(4637693767/10));

x.push(Math.round(7432498619/10));

x.push(Math.round(9194221336/10));

x.push(Math.round(2306758820/10));

x.push(Math.round(8926167069/10));

x.push(Math.round(2811287981/10));

x.push(Math.round(4427422891/10));

x.push(Math.round(4745144573/10));

x.push(Math.round(7038648610/10));

x.push(Math.round(6217645714/10));

x.push(Math.round(6490635246/10));

x.push(Math.round(9257586771/10));

x.push(Math.round(5820356532/10));

x.push(Math.round(8018119938/10));

x.push(Math.round(3539866437/10));

x.push(Math.round(8651550600/10));

x.push(Math.round(7169388870/10));

x.push(Math.round(5437007057/10));

x.push(Math.round(5328265410/10));

x.push(Math.round(3612327252/10));

x.push(Math.round(4587657617/10));

x.push(Math.round(1742370690/10));

x.push(Math.round(8114266041/10));

x.push(Math.round(5193432545/10));

x.push(Math.round(6246722164/10));

x.push(Math.round(1573244438/10));

x.push(Math.round(5503768752/10));

x.push(Math.round(1833638482/10));

x.push(Math.round(8038628759/10));

x.push(Math.round(7818283375/10));

x.push(Math.round(1672632010/10));

x.push(Math.round(4840309812/10));

x.push(Math.round(8708698755/10));

x.push(Math.round(5995940689/10));

x.push(Math.round(6979395067/10));

x.push(Math.round(4105268470/10));

x.push(Math.round(6537860736/10));

x.push(Math.round(3582903531/10));

x.push(Math.round(9495375976/10));

x.push(Math.round(8890280257/10));

x.push(Math.round(2526768027/10));

x.push(Math.round(3627021854/10));

x.push(Math.round(2407448690/10));

x.push(Math.round(9143028819/10));

x.push(Math.round(3441306557/10));

x.push(Math.round(2305308117/10));

x.push(Math.round(1148769693/10));

x.push(Math.round(6378329949/10));

x.push(Math.round(6772018697/10));

x.push(Math.round(9554825530/10));

x.push(Math.round(7608532713/10));

x.push(Math.round(3777424253/10));

x.push(Math.round(2370191327/10));

x.push(Math.round(2979886027/10));

x.push(Math.round(1849570145/10));

x.push(Math.round(3829820378/10));

x.push(Math.round(3482954382/10));

x.push(Math.round(4095795306/10));

x.push(Math.round(2974615218/10));

x.push(Math.round(4169811622/10));

x.push(Math.round(6246795719/10));

x.push(Math.round(2318970677/10));

x.push(Math.round(8618808822/10));

x.push(Math.round(1130673970/10));

x.push(Math.round(8295917476/10));

x.push(Math.round(9762333104/10));

x.push(Math.round(4284628018/10));

x.push(Math.round(5512160354/10));

x.push(Math.round(3223819573/10));

x.push(Math.round(7550616496/10));

x.push(Math.round(6217784275/10));

x.push(Math.round(3292418570/10));

x.push(Math.round(9951867143/10));

x.push(Math.round(7326746080/10));

x.push(Math.round(7684182252/10));

x.push(Math.round(9714261791/10));

x.push(Math.round(8778364618/10));

x.push(Math.round(1084880252/10));

x.push(Math.round(7132961247/10));

x.push(Math.round(6218407357/10));

x.push(Math.round(6662789198/10));

x.push(Math.round(6066182629/10));

x.push(Math.round(8578694408/10));

x.push(Math.round(6602439640/10));

x.push(Math.round(6491398268/10));

x.push(Math.round(1673093931/10));

x.push(Math.round(9480937724/10));

x.push(Math.round(7863916702/10));

x.push(Math.round(1536871371/10));

x.push(Math.round(4078992311/10));

x.push(Math.round(4488991150/10));

x.push(Math.round(4150312888/10));

x.push(Math.round(8123488067/10));

x.push(Math.round(8261657077/10));

x.push(Math.round(2291880205/10));

x.push(Math.round(7715854250/10));

x.push(Math.round(7210783843/10));

x.push(Math.round(2084960398/10));

x.push(Math.round(5350353422/10));

for (var i=0; i<100; i++) {
  sum+=x[i];
}

console.log(sum);