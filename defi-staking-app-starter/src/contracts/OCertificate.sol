// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract OCertificate {
    struct CertificateData {
        string name;
        uint256 uid;
        string courseName;
        string remark;
        uint256 dateOfIssue;
        address issuer;
    }

    mapping(uint256 => CertificateData) public certificates;
    uint256 public certificateCount;

    // Event to emit when a new certificate is generated
    event CertificateGenerated(uint256 indexed uid, address indexed issuer);

    // Event to emit when a certificate is validated
    event CertificateValidated(uint256 indexed uid, bool isValid);

    // Function to generate a new certificate
    function generateCertificate(
        string memory _name,
        uint256 _uid,
        string memory _courseName,
        string memory _remark,
        uint256 _dateOfIssue
    ) public {
        certificates[_uid] = CertificateData({
            name: _name,
            uid: _uid,
            courseName: _courseName,
            remark: _remark,
            dateOfIssue: _dateOfIssue,
            issuer: msg.sender
        });

        certificateCount++;

        // Emit event
        emit CertificateGenerated(_uid, msg.sender);
    }

    // Function to validate a certificate
    function validateCertificate(uint256 _uid, string memory _name, string memory _courseName, uint256 _dateOfIssue) public {
        CertificateData memory certificate = certificates[_uid];
        bool isValid = (keccak256(abi.encodePacked(certificate.name)) == keccak256(abi.encodePacked(_name))) &&
                       (certificate.dateOfIssue == _dateOfIssue) &&
                       (keccak256(abi.encodePacked(certificate.courseName)) == keccak256(abi.encodePacked(_courseName)));
        emit CertificateValidated(_uid, isValid);
    }
}
