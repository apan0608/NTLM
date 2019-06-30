// the specification of type 1 message is pasted below
// https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-nlmp/b34032e5-3aae-4bc6-84c3-c6d80eadf7f2

var type1Message = {
    Signature: 'NTLMSSP' + '\0',// 8 bytes
    MessageType: 0x00000001,// 4 bytes, hardcoded
    NegotiateFlags: //4 bytes 32 bits long 

}

negotiateFlags = {
    // W 56 bit encryption if set 
    NTLMSSP_NEGOTIATE_56: 1, 
    // V if set, requests an explicit key exchange, should be used 
    NTLMSSP_NEGOTIATE_KEY_EXCH: 1,
    // U if set, requests 128 bit session key negoriation. in challenge message 
    // only if NTLMSSP_NEGOTIATE_SEAL and NTLMSSP_NEGOTIATE_SIGN are set  
    NTLMSSP_NEGOTIATE_128: 1,    
    // not used must be 0
    r1: 0,
    r2: 0, 
    r3: 0,
    // T Procotol version number todo guess the version is 2
    NTLMSSP_NEGOTIATE_VERSION: 2,
    r4: 0,
    // S TargetInfo field in the challenage_message are populated
    NTLMSSP_NEGOTIATE_TARGET_INFO: 0,
    // R requires the usage of the LMOWF
    NTLMSSP_REQUEST_NON_NT_SESSION_KEY: 0,
    r5: 0,
    // Q requires an identify level token 
    NTLMSSP_NEGOTIATE_IDENTIFY: 0,
    // P request usage of the NTLM v2 session security, it's still v1
    //If both NTLMSSP_NEGOTIATE_EXTENDED_SESSIONSECURITY and NTLMSSP_NEGOTIATE_LM_KEY are requested, 
    NTLMSSP_NEGOTIATE_EXTENDED_SESSIONSECURITY: 0,
    r6: 0,
    // O TrargetName must be a domain name 
    NTLMSSP_TARGET_TYPE_SERVER:






};

exports.getType1Message = function() {
    return 1;
}