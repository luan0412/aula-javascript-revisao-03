let salario = 1580   

if (salario<=280) {
    console.log(`O salário antes do reajuste é : R$${salario}`)
    let por = 20
    salario = (salario*(por/100)) + salario 
    console.log(`A porcentagem de acrescimo foi ${por}%`)
    console.log(`O salário depois do reajuste é : R$${salario}`)

}else if(salario>280 && salario<=700){
    console.log(`O salário antes do reajuste é : R$${salario}`)
    let por = 15
    salario = (salario*(por/100)) + salario 
    console.log(`A porcentagem de acrescimo foi ${por}%`)
    console.log(`O salário depois do reajuste é : R$${salario}`)
   
}else if(salario>700 && salario<=1500){
    console.log(`O salário antes do reajuste é : R$${salario}`)
    let por = 10
    salario = (salario*(por/100)) + salario 
    console.log(`A porcentagem de acrescimo foi ${por}%`)
    console.log(`O salário depois do reajuste é : R$${salario}`)
   
}else if(salario>1500){
    console.log(`O salário antes do reajuste é : R$${salario}`)
    let por = 5
    salario = (salario*(por/100)) + salario 
    console.log(`A porcentagem de acrescimo foi ${por}%`)
    console.log(`O salário depois do reajuste é : R$${salario}`)
}
