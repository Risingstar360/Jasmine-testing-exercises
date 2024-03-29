describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add new server line with empty input', function (){
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('should update servertable', function (){
    submitServerInfo();
    updateServerTable();

    let tdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(tdList.length).toEqual(3);
    expect(tdList[0].innerText).toEqual('Alice');
    expect(tdList[1].innerText).toEqual('$0.00');
    expect(tdList[2].innerText).toEqual('X');
  });

  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
    // teardown logic
  });
});
