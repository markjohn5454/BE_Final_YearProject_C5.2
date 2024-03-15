// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IPFSStorage {
    // Mapping to store IPFS hash of PDF files uploaded by each user
    mapping(address => string) public userFiles;

    // Event emitted when a PDF file is stored
    event FileStored(address indexed uploader, string ipfsHash);

    // Function to store PDF file hash
    function storePDFHash(string memory _ipfsHash) public {
        userFiles[msg.sender] = _ipfsHash;
        emit FileStored(msg.sender, _ipfsHash);
    }

    // Function to retrieve IPFS hash of PDF file uploaded by a specific user
    function getPDFHash(address _uploader) public view returns (string memory) {
        return userFiles[_uploader];
    }

    // Function to validate PDF file against its IPFS hash
    function validatePDF(string memory _pdfHash) public view returns (bool) {
        // Get the IPFS hash of the PDF file uploaded by the caller
        string memory uploadedHash = userFiles[msg.sender];
        // Compare the uploaded hash with the provided hash
        return keccak256(abi.encodePacked(uploadedHash)) == keccak256(abi.encodePacked(_pdfHash));
    }
}