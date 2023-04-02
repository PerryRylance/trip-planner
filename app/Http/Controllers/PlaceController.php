<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;

class PlaceController extends Controller
{
	private static $examplePlace = [
		'id'	=> 1,
		'lat'	=> 36.50130415670029,
		'lng'	=> -87.69369635040343,
		'name'	=> 'Memories'
	];

    public static function showAll(Request $request)
	{
		return Response::json([static::$examplePlace]);
	}

	public static function showOne(Request $request)
	{
		return Response::json(static::$examplePlace);
	}

	public static function create(Request $request)
	{
		return Response::json(static::$examplePlace);
	}

	public static function update(Request $request)
	{
		return Response::json(static::$examplePlace);
	}

	public static function delete(Request $request)
	{
		return Response::json("", 204);
	}
}
