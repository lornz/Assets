using UnityEngine;
using System.Collections;

public class chef : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetButtonDown ("Fire1")) 
		{
			Debug.Log("Clicked");
			createObject ();
		}
	}
	public GameObject wallPrefab;
	private void createObject ()
	{
	}
}
