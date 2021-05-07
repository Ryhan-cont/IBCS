<?php

namespace App\Http\Controllers;

use App\Models\Grade;
use App\Models\Lookup;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class GradeController extends Controller
{

    public function __construct(Request $request)
    {
        $this->middleware('auth');
        $this->middleware('permission');
    }   
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lowGradeBasic = Lookup::where('name', 'lowGradeBasic')->first();
        if($lowGradeBasic == null){$lowGradeBasic = 0;}else{$lowGradeBasic = $lowGradeBasic->value;}
        $gradeList = array();
        for($i=1; $i<7; $i++){
            $gradeList[] = $this->salary($lowGradeBasic, $i, 6);
        }

        return response()->json([
            'status' => 200,
            'list' => $gradeList,
        ], 200);

    }

    public function salary($lowestBasic, $grade, $totalGrade){
        $basic = $lowestBasic*($totalGrade-$grade+1);
        $houseRent = $basic*.2;
        $medicalAllowance = $basic*.15;
        $total = $basic+$houseRent+$medicalAllowance;

        return [
            'basic' => round($basic,2),
            'houseRent' => round($houseRent,2),
            'medicalAllowance' => round($medicalAllowance,2),
            'total' => round($total,2),
            'grade' => $grade,
        ];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'lowGradeBasic' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()],422);
        }

        $lowGradeBasic = Lookup::where('name', 'lowGradeBasic')->first();

        if($lowGradeBasic == null){
            $createLookup = new Lookup;
            $createLookup->name = 'lowGradeBasic';
            $createLookup->value = $input['lowGradeBasic'];
            $save = $createLookup->save();
            if($save){
                return response()->json([
                    'status' => 200,
                    'message' => "Basic salary added successfully.",
                ], 200);
            }else{
                return response()->json(['message' => 'Failed to save low grade basic'],500);
            }
        }else{
            $lowGradeBasic->value = $input['lowGradeBasic'];
            $save = $lowGradeBasic->save();
            if($save){
                return response()->json([
                    'status' => 200,
                    'message' => "Basic salary updated successfully.",
                ], 200);
            }else{
                return response()->json(['message' => 'Failed to save low grade basic'],500);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Grade  $grade
     * @return \Illuminate\Http\Response
     */
    public function show(Grade $grade)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Grade  $grade
     * @return \Illuminate\Http\Response
     */
    public function edit(Grade $grade)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Grade  $grade
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Grade $grade)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Grade  $grade
     * @return \Illuminate\Http\Response
     */
    public function destroy(Grade $grade)
    {
        //
    }
}
