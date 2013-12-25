#pragma strict

var wallPrefab : GameObject;

function Start () {

}

function Update () {
	var mousex = Input.mousePosition.x;
    var mousey = Input.mousePosition.y;
    var ray = camera.main.ScreenPointToRay (Vector3(mousex,mousey,0));
     
    var hit : RaycastHit;
     
    if (Physics.Raycast (ray, hit, 200)) {
     
    }
    if ( Input.GetMouseButtonDown(0) ){
    var create = Network.Instantiate(wallPrefab, hit.point+Vector3(0,2,0), Quaternion.identity,0);
     
    }

}