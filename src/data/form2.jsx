import { Divider } from '@material-ui/core'
import React from 'react'
import JsonData from './info.json'
import months from './new.json'
import row from './row.json'


function Formnew(){
    const arr=JsonData
//offeset var 

    let oppes=arr[0][202001][11][0].claims_count
    let oppes2=arr[0][202002][10][0].claims_count
    let oppes3=arr[0][202003][9][0].claims_count
    let oppes4=arr[0][202004][8][0].claims_count
    let oppes5=arr[0][202005][7][0].claims_count
    let oppes6=arr[0][202006][6][0].claims_count
    let oppes7=arr[0][202007][5][0].claims_count
    let oppes8=arr[0][202008][4][0].claims_count
    let oppes9=arr[0][202009][3][0].claims_count
    let oppes10=arr[0][202010][2][0].claims_count
    let oppes11=arr[0][202011][1][0].claims_count
    let oppes12=arr[0][202012][0][0].claims_count


    let year1=202001
    let element1=0
    let element2=0
    let count2=0
    let count1=0
    let sumofsum=0

    for (let index = 0; index < 11; index++) {
        element1 = arr[0][year1][0][0].claims_count
        count1 += element1
        element2 = arr[0][year1][1][0].claims_count
        count2 += element2
        year1 += 1
        sumofsum= (count2/count1).toFixed(3)

    }
    let year3=202001
    let element31=0
    let element21=0
    let count31=0
    let count21=0
    let sumofsum2=0
    for (let index = 0; index < 10; index++) {
        element31 = arr[0][year3][2][0].claims_count
        count31 += element31
        element21 = arr[0][year3][1][0].claims_count
        count21 += element21
        year3 += 1

        sumofsum2= (count31/count21).toFixed(3)
        
    }

    let year2=202001

    let element3=0
    let element4=0
    let count3=0
    let count4=0
    let sumofsum3=0

    for (let index = 0; index < 9; index++) {
        element3 = arr[0][year2][2][0].claims_count
        count3 += element3
        element4 = arr[0][year2][3][0].claims_count
        count4 += element4
        year2 += 1
        sumofsum3= (count4/count3).toFixed(3)

    }
    let year4=202001

    let element5=0
    let element41=0
    let count5=0
    let count41=0
    let sumofsum4=0

    for (let index = 0; index < 8; index++) {
        element5 = arr[0][year4][4][0].claims_count
        count5 += element5
        element41 = arr[0][year4][3][0].claims_count
        count41 += element41
        year4 += 1
        sumofsum4= (count5/count41).toFixed(3)

    }
    let year5=202001
    let element6=0
    let element51=0
    let count6=0
    let count51=0
    let sumofsum5=0

    for (let index = 0; index < 7; index++) {
        element6 = arr[0][year5][5][0].claims_count
        count6 += element6
        element51 = arr[0][year5][4][0].claims_count
        count51 += element51
        year5 += 1
        sumofsum5= (count6/count51).toFixed(3)
    }
    let year6=202001
    let element7=0
    let element61=0
    let count7=0
    let count61=0
    let sumofsum6=0

    for (let index = 0; index < 6; index++) {
        element7 = arr[0][year6][6][0].claims_count
        count7 += element7
        element61 = arr[0][year6][5][0].claims_count
        count61 += element61
        year6 += 1
        sumofsum6= (count7/count61).toFixed(3)
    }
    let year7=202001
    let element8=0
    let element71=0
    let count8=0
    let count71=0
    let sumofsum7=0

    for (let index = 0; index < 5; index++) {
        element8 = arr[0][year7][7][0].claims_count
        count8 += element8
        element71 = arr[0][year7][6][0].claims_count
        count71 += element71
        year7 += 1
        sumofsum7= (count8/count71).toFixed(3)

    }
    let year8=202001
    let element9=0
    let element81=0
    let count9=0
    let count81=0
    let sumofsum8=0

    for (let index = 0; index < 4; index++) {
        element9 = arr[0][year8][8][0].claims_count
        count9 += element9
        element81 = arr[0][year8][7][0].claims_count
        count81 += element81
        year8 += 1
        sumofsum8= (count9/count81).toFixed(3)

    }
    let year9=202001
    let element10=0
    let element91=0
    let count10=0
    let count91=0
    let sumofsum9=0

    for (let index = 0; index < 3; index++) {
        element10 = arr[0][year9][9][0].claims_count
        count10 += element10
        element91 = arr[0][year9][8][0].claims_count
        count91 += element91
        year9 += 1
        sumofsum9= (count10/count91).toFixed(3)

    }
    let year10=202001
    let element11=0
    let element101=0
    let count11=0
    let count101=0
    let sumofsum10=0

    for (let index = 0; index < 2; index++) {
        element11 = arr[0][year10][10][0].claims_count
        count11 += element11
        element101 = arr[0][year10][9][0].claims_count
        count101 += element101
        year10 += 1
        sumofsum10= (count11/count101).toFixed(3)

    }
    let year11=202001
    let element12=0
    let element111=0
    let count12=0
    let count111=0
    let sumofsum11=0

    for (let index = 0; index < 1; index++) {
        element12 = arr[0][year11][11][0].claims_count
        count12 += element12
        element111 = arr[0][year11][10][0].claims_count
        count111 += element111
        year11 += 1
        sumofsum11= (count12/count111).toFixed(3)

    }
    let year12=202001
    let element13=0
    let count13=0
    let sumofsum12=0

    for (let index = 0; index < 1; index++) {
        element13 = arr[0][year12][11][0].claims_count
        count13 += element12
        year11 += 1
        sumofsum12= (count13/count13).toFixed(3)

    }

	return(
		<div>
          
        
			<table class="tableneww">
				<thead>
					<tr>
                    <th>Accident month--</th>
                    {months.map(item=>(<th>{item}</th>))}
					</tr>
                    
         <tr>
            <td>202001</td>
        {JsonData[0][202001].map(item=>(<td> {item[0].claims_count}   </td> ))}
       </tr>
       <tr>
            <td>202002</td>
        {JsonData[0][202002].map(item=>(<td>  {item[0].claims_count}   </td> ))}
       </tr>
       <tr>
            <td>202003</td>
        {JsonData[0][202003].map(item=>(<td>  {item[0].claims_count}   </td> ))}
       </tr>
       <tr>
            <td>202004</td>
        {JsonData[0][202004].map(item=>(<td>  {item[0].claims_count}   </td> ))}
       </tr>
       <tr>
            <td>202005</td>
        {JsonData[0][202005].map(item=>(<td>  {item[0].claims_count}   </td> ))}
       </tr>
       <tr>
            <td>202006</td>
        {JsonData[0][202006].map(item=>(<td>  {item[0].claims_count}   </td> ))}
       </tr>
       <tr>
            <td>202007</td>
        {JsonData[0][202007].map(item=>(<td>  {item[0].claims_count}   </td> ))}
       </tr>
       <tr>
            <td>202008</td>
        {JsonData[0][202008].map(item=>(<td>  {item[0].claims_count}   </td> ))}
       </tr>
       <tr>
            <td>202009</td>
        {JsonData[0][202009].map(item=>(<td>  {item[0].claims_count}   </td> ))}
       </tr>
       <tr>
            <td>202010</td>
        {JsonData[0][202010].map(item=>(<td>  {item[0].claims_count}   </td> ))}
       </tr>
       <tr>
            <td>202011</td>
        {JsonData[0][202011].map(item=>(<td>  {item[0].claims_count}   </td> ))}
       </tr>
       <tr>
            <td>202012</td>
        {JsonData[0][202012].map(item=>(<td>  {item[0].claims_count}   </td> ))}
       </tr>



         
       </thead>
				{/* <tbody>
				
					
					{DisplayData}
					
				</tbody> */}
			</table>
            <br />

        <table class="tableneww">
        <thead>
					<tr>
                    <th>---</th>
                    {row.map(item=>(<th>{item}</th>))}
					</tr>
                    <tr>
                    <tr>Link ratios    </tr>
                    <td>{Number(sumofsum)}</td>
                    <td>{Number(sumofsum2)}</td>
                    <td>{Number(sumofsum3)}</td>
                    <td>{Number(sumofsum4)}</td>
                    <td>{Number(sumofsum5)}</td>
                    <td>{Number(sumofsum6)}</td>
                    <td>{Number(sumofsum7)}</td>
                    <td>{Number(sumofsum8)}</td>
                    <td>{Number(sumofsum9)}</td>
                    <td>{Number(sumofsum10)}</td>
                    <td>{Number(sumofsum11)}</td>
                    <td>{Number(sumofsum12)}</td>
                    </tr>
                    </thead>
        </table>
        <br />
        <table class="tableneww">
        <thead>
					<tr>
                    <th>---</th>
                    {row.map(item=>(<th>{item}</th>))}
					</tr>
                    <tr>
                    <tr>Dev Factors</tr>
                    <td>{(sumofsum*sumofsum2*sumofsum3*sumofsum4*sumofsum5*sumofsum6*sumofsum7
                        *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12).toFixed(3)}</td>
                        <td>{Number(sumofsum2*sumofsum3*sumofsum4*sumofsum5*sumofsum6*sumofsum7
                        *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12).toFixed(3)}</td>
                        <td>{Number(sumofsum3*sumofsum4*sumofsum5*sumofsum6*sumofsum7
                        *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12).toFixed(3)}</td>
                        <td>{Number(sumofsum4*sumofsum5*sumofsum6*sumofsum7
                        *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12).toFixed(3)}</td>
                        <td>{Number(sumofsum5*sumofsum6*sumofsum7
                        *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12).toFixed(3)}</td>
                        <td>{Number(sumofsum6*sumofsum7
                        *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12).toFixed(3)}</td>
                        <td>{Number(sumofsum7
                        *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12).toFixed(3)}</td>
                        <td>{Number(sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12).toFixed(3)}</td>
                        <td>{Number(sumofsum9*sumofsum10*sumofsum11*sumofsum12).toFixed(3)}</td>
                        <td>{Number(sumofsum10*sumofsum11*sumofsum12).toFixed(3)}</td>
                        <td>{Number(sumofsum11*sumofsum12).toFixed(3)}</td>
                        <td>{Number(sumofsum12).toFixed(3)}</td>
             
                    </tr>
                    </thead>
        </table>
        <br />

        <table class="tableneww">

            <thead>
                <tr>
                    <th>Accident month</th>
                    <th>Incurred</th>
                    <th>Dev Factors</th>
                    <th>Ultimate</th>
                    <th>IBNR</th>

				</tr>
                <tr>
                    <td>202001</td>
                    <td>{oppes}</td>
                    <td>{Number(sumofsum12).toFixed(3)}</td>
                    <td>{oppes*Number(sumofsum12).toFixed(3)}</td>
                    <td>{(oppes*Number(sumofsum12).toFixed(3)-oppes).toFixed(3)}</td>

                </tr>
                <tr>
                    <td>202002</td>
                    <td>{oppes2}</td>
                    <td>{Number(sumofsum12)}</td>
                    <td>{oppes2*Number(sumofsum12)}</td>
                    <td>{oppes2*Number(sumofsum12)-oppes2}</td>
                </tr>
                <tr>
                    <td>202003</td>
                    <td>{oppes3}</td>
                    <td>{Number(sumofsum12)}</td>
                    <td>{oppes3*Number(sumofsum11)}</td>
                    <td>{oppes3*Number(sumofsum11)-oppes3}</td>
                </tr>
                <tr>
                    <td>202004</td>
                    <td>{oppes4}</td>
                    <td>{Number(sumofsum10)}</td>
                    <td>{oppes4*Number(sumofsum10)}</td>
                    <td>{oppes4*Number(sumofsum10)-oppes4}</td>
                </tr>
                <tr>
                    <td>202005</td>
                    <td>{oppes5}</td>
                    <td>{Number(sumofsum9)}</td>
                    <td>{oppes5*Number(sumofsum9)}</td>
                    <td>{oppes5*Number(sumofsum9)-oppes5}</td>
                </tr>
                <tr>
                    <td>202006</td>
                    <td>{oppes6}</td>
                    <td>{Number(sumofsum8)}</td>
                    <td>{oppes6*Number(sumofsum8)}</td>
                    <td>{oppes6*Number(sumofsum8)-oppes6}</td>
                </tr>
                <tr>
                        <td>202007</td>
                        <td>{oppes7}</td>
                        <td>{Number(sumofsum6*sumofsum7
                            *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12).toFixed(3)}</td>
                        <td>{oppes7*Number(sumofsum6*sumofsum7
                            *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12)}</td>
                        <td>{oppes7*Number(sumofsum6*sumofsum7
                            *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12)-oppes7}</td>
                    </tr>
                    <tr>
                        <td>202008</td>
                        <td>{oppes8}</td>
                        <td>{Number(sumofsum5*sumofsum6*sumofsum7
                            *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12).toFixed(3)}</td>
                        <td>{Math.round(oppes8*Number(sumofsum5*sumofsum6*sumofsum7
                            *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12))}</td>
                        <td>{Math.round(oppes8*Number(sumofsum5*sumofsum6*sumofsum7
                            *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12)-oppes8 )}</td>
                    </tr>
                <tr>
                    <td>202009</td>
                    <td>{oppes9}</td>
                    <td>{(Number(sumofsum4*sumofsum5*sumofsum6*sumofsum7
                        *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12)).toFixed(3)}</td>
                    <td>{Math.round(oppes9*Number(sumofsum4*sumofsum5*sumofsum6*sumofsum7
                        *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12))}</td>
                    <td>{Math.round(oppes9*Number(sumofsum4*sumofsum5*sumofsum6*sumofsum7
                        *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12)-oppes9) }</td>
                </tr>
                <tr>
                    <td>202010</td>
                    <td>{oppes10}</td>
                    <td>{(Number(sumofsum3*sumofsum4*sumofsum5*sumofsum6*sumofsum7
                        *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12)).toFixed(3)}</td>
                    <td>{Math.round(oppes10*Number(sumofsum3*sumofsum4*sumofsum5*sumofsum6*sumofsum7
                        *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12))}</td>
                    <td>{Math.round(oppes10*Number(sumofsum3*sumofsum4*sumofsum5*sumofsum6*sumofsum7
                        *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12)-oppes10 )}</td>
                </tr>
                <tr>
                    <td>202011</td>
                    <td>{oppes11}</td>
                    <td>{(Number(sumofsum2*sumofsum3*sumofsum4*sumofsum5*sumofsum6*sumofsum7
                        *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12)).toFixed(3)}</td>
                    <td>{Math.round(oppes11*Number(sumofsum2*sumofsum3*sumofsum4*sumofsum5*sumofsum6*sumofsum7
                        *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12))}</td>
                    <td>{Math.round(oppes11*Number(sumofsum2*sumofsum3*sumofsum4*sumofsum5*sumofsum6*sumofsum7
                        *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12)-oppes11) }</td>
                </tr>
                <tr>
                    <td>202012</td>
                    <td>{oppes12}</td>
                    <td>{(Number(sumofsum*sumofsum2*sumofsum3*sumofsum4*sumofsum5*sumofsum6*sumofsum7
                        *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12)).toFixed(3)}</td>
                    <td>{Math.round(oppes12*Number(sumofsum*sumofsum2*sumofsum3*sumofsum4*sumofsum5*sumofsum6*sumofsum7
                        *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12))}</td>
                    <td>{Math.round(oppes12*Number(sumofsum*sumofsum2*sumofsum3*sumofsum4*sumofsum5*sumofsum6*sumofsum7
                        *sumofsum8*sumofsum9*sumofsum10*sumofsum11*sumofsum12)-oppes12 )}</td>
                </tr>
                </thead>
                </table>
			
		</div>
	)

            }
export default Formnew;
