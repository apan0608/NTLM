// the specification of type 1 message is pasted below
// https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-nlmp/b34032e5-3aae-4bc6-84c3-c6d80eadf7f2

var type1Message = {
    Signature: 'NTLMSSP' + '\0',// 8 bytes
    MessageType: 0x00000001,// 4 bytes, hardcoded
    NegotiateFlags: //4 bytes 32 bits long 

}

negotiateFlags = {
    //56 bit encryption if set 
    NTLMSSP_NEGOTIATE_56: 1, 
    // if set, requests an explicit key exchange, should be used 
    NTLMSSP_NEGOTIATE_KEY_EXCH: 1  

};

exports.getType1Message = function() {
    return 1;
}