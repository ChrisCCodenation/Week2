let balance = 420.6
let pin = 1408
const cashWithdrawal = (amount, accNum, pinNum) => {
    if ((pin === pinNum) && (balance>amount))
        {
            console.log(`Withdrawing ${amount} from account ${accNum}`)
        }
}
cashWithdrawal(20, 180001056, 1408);
cashWithdrawal(400, 66666666, 5130);
cashWithdrawal(666.50, 66666666, 1408);

